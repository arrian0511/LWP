using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Twt.Lwp.Models
{
	/// <summary>
	/// Twitter Autheticate Model Class
	/// </summary>
	public class TwitterAuth
	{
		/// <summary>
		/// Constructor
		/// </summary>
		public TwitterAuth ()
		{
			/// Initialize Member Variables <BR>
			this.ConsumerKey		= string.Empty;
			this.ConsumerSecret		= string.Empty;
			this.OAuthToken			= string.Empty;
			this.OAuthTokenSecret	= string.Empty;
		}

		/// <summary>
		/// Consumer Key
		/// </summary>
		public string ConsumerKey		{ get; set; }

		/// <summary>
		/// Consumer Secret
		/// </summary>
		public string ConsumerSecret	{ get; set; }

		/// <summary>
		/// Auth Token
		/// </summary>
		public string OAuthToken		{ get; set; }

		/// <summary>
		/// Auth Token Secret
		/// </summary>
		public string OAuthTokenSecret	{ get; set; }
	}
}
