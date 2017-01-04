using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace Twt.Lwp.Models
{
	/// <summary>
	/// User Model Class
	/// </summary>
	[JsonObject (MemberSerialization.OptOut)]
	public class Profile
	{
		/// <summary>
		/// Constructor
		/// </summary>
		public Profile ()
		{
			/// Initialize Member Variables <BR>
			this.ImageUrl = string.Empty;
			this.UserName = string.Empty;
		}

		/// <summary>
		/// Image Url
		/// </summary>
		public string ImageUrl { get; set; }

		/// <summary>
		/// Image User Name
		/// </summary>
		public string UserName { get; set; }
	}
}
