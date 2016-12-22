using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Twt.Lwp.Web.Configuration
{
	public class TwitterAuth
	{
		public string ConsumerKey { get; set; }
		public string ConsumerSecret { get; set; }
		public string OAuthToken { get; set; }
		public string OAuthTokenSecret { get; set; }
	}
}
