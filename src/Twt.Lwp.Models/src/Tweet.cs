using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Twt.Lwp.Models
{
	public class Tweet
	{
		public Tweet ()
		{
			this.Title			= string.Empty;
			this.Message		= string.Empty;
			this.RetweetCount	= 0;
			this.LikeCount		= 0;
		}

		public string	Title			{ get; set; }
		public string	Message			{ get; set; }
		public int		RetweetCount	{ get; set; }
		public int		LikeCount		{ get; set; }
	}
}
