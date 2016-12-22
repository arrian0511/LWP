using System.IO;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Mvc;
using Twt.Lwp.Web.Configuration;

namespace Twt.Lwp.Web
{
	public class Startup
	{
		/// <summary>
		/// Configuration Settings Interface
		/// </summary>
		public IConfigurationRoot Configuration { get; }

		public Startup (IHostingEnvironment env)
		{
			var builder = new ConfigurationBuilder ()
				.SetBasePath (env.ContentRootPath)
				.AddJsonFile ("appsettings.json", optional: false, reloadOnChange: true)
				.AddJsonFile ($"appsettings.{env.EnvironmentName}.json", optional: true)
				.AddEnvironmentVariables ();

			Configuration = builder.Build ();
		}

		// This method gets called by the runtime. Use this method to add services to the container.
		// For more information on how to configure your application, visit http://go.microsoft.com/fwlink/?LinkID=398940
		public void ConfigureServices (IServiceCollection services)
		{
			// Setup Caching
			services.AddMvc (_setup =>
			{
				_setup.CacheProfiles.Add ("PrivateCache", new CacheProfile ()
				{ Duration = 0, Location = ResponseCacheLocation.None, NoStore = true });
			});

			// Add functionality to inject IOptions<T>
			services.AddOptions ();

			// Add our Config object so it can be injected
			services.Configure<TwitterAuth>(Configuration.GetSection("TwitterAuth"));
			services.AddSingleton(Configuration);
		}

		// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
		public void Configure (IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
		{
			loggerFactory.AddConsole ();

			if (env.IsDevelopment ()) {
				app.UseDeveloperExceptionPage ();
			}

			app.UseDefaultFiles ();
			app.UseStaticFiles ();

			app.Use (async (context, next) =>
			{
				await next ();

				// Set Angular Root Page in case of error
				if (context.Response.StatusCode == 404 &&
					!Path.HasExtension (context.Request.Path.Value)) {
					context.Request.Path = "/index.html";
					await next ();
				}
			});

			app.UseMvc ();
		}
	}
}
