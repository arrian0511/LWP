using System.Collections.Generic;
using Newtonsoft.Json;

namespace Twt.Lwp.Models
{
	/// <summary>
	/// User Model Class
	/// </summary>
	[JsonObject (MemberSerialization.OptOut)]
	public class User
	{
		/// <summary>
		/// Constructor
		/// </summary>
		public User ()
		{
			/// Initialize Member Variables <BR>
			this.Name		= string.Empty;
			this.Tweets		= new List<Tweet> ();
		}

		/// <summary>
		/// User Name
		/// </summary>
		public string				Name	{ get; set; }

		/// <summary>
		/// User Tweets
		/// </summary>
		public ICollection<Tweet>	Tweets	{ get; set; }
	}
}
