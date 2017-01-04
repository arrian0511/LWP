using System.Collections.Generic;
using Newtonsoft.Json;
using System;

namespace Twt.Lwp.Models
{
	/// <summary>
	/// User Model Class
	/// </summary>
	[JsonObject (MemberSerialization.OptOut)]
	public class Tweet
	{
		/// <summary>
		/// Constructor
		/// </summary>
		public Tweet ()
		{
			/// Initialize Member Variables <BR>
			this.No				= 0;
			this.Message		= string.Empty;
			this.ProfInfo		= new Profile ();
			this.CreatedDate	= new DateTime ();
			this.RetweetCount	= 0;
			this.LikeCount		= 0;
		}

		/// <summary>
		/// No
		/// </summary>
		public int		No				{ get; set; }

		/// <summary>
		/// Message
		/// </summary>
		public string	Message			{ get; set; }

		/// <summary>
		/// Profile Information
		/// </summary>
		public Profile	ProfInfo		{get ; set; }

		/// <summary>
		/// Created Date
		/// </summary>
		public DateTime CreatedDate		{ get; set; }

		/// <summary>
		/// Retweet Count
		/// </summary>
		public int		RetweetCount	{ get; set; }

		/// <summary>
		/// Like Count
		/// </summary>
		public int		LikeCount		{ get; set; }

		/// <summary>
		/// Tweet Rate
		/// </summary>
		[JsonIgnore]
		public int Rate
		{
			get {
				return (this.RetweetCount * 2) + this.LikeCount;
			}
		}
	}
}
