using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Twt.Lwp.Models;
using Microsoft.Extensions.Options;
using Twt.Lwp.Services;

namespace Twt.Lwp.Web.Controllers
{
	/// <summary>
	/// Tweet Controller
	/// </summary>
	[Route ("api/[controller]")]
	[ResponseCache (CacheProfileName = "PrivateCache")]
	public class TweetController : Controller
	{
		private	readonly	TwitterAuth			_twitterAuth;		/// Twitter Authentication Settings
		private				ITwitterService		_twitterService;	/// Twitter Service

		/// <summary>
		/// Constructor
		/// </summary>
		/// <param name="iTwitterService">[in] Twitter Service</param>
		/// <param name="iTwitterService">[in] Twitter Service</param>
		public TweetController (ITwitterService			iTwitterService, 
								IOptions<TwitterAuth>	iTwitterAuth)
		{
			/// Initialize Member Variables <BR>
			this._twitterService	= iTwitterService;
			this._twitterAuth		= iTwitterAuth.Value;
		}

		/// <summary>
		/// GET: api/values
		/// </summary>
		/// <param name="user">[in] User Name</param>
		/// <param name="count">[in] Record Count</param>
		/// <returns>JSON Result</returns>
		[HttpGet ("GetByUser/{user}/{count}")]
		public async Task<IActionResult> GetByUser (string user, int count)
		{
			var _allrecord = new Twt.Lwp.Models.User ();	// User Information
			
			/// Get User Tweets <BR>
			var _tweetList = await this._twitterService.GetUserTweet (this._twitterAuth, user, count);
			_allrecord = new Twt.Lwp.Models.User () { Name = user, Tweets = _tweetList };

			/// Return JSON Result <BR>
			return new JsonResult (_allrecord, DefJsonFormat);
		}

		/// <summary>
		/// Default JSON Format <BR>
		/// </summary>
		private JsonSerializerSettings DefJsonFormat
		{
			get
			{
				return new JsonSerializerSettings
				{
					Formatting = Formatting.Indented,
					DateFormatHandling = DateFormatHandling.MicrosoftDateFormat
				};
			}
		}

	}
}
