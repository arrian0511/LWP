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
			this.Name = string.Empty;
			this.Message = string.Empty;
		}

		public string Name		{ get; set; }
		public string Message	{ get; set; }
	}
}
