using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Twt.Lwp.Models
{
	public class User
	{
		public User () {
			this.Name		= string.Empty;
			this.Tweets		= new List<Tweet> ();
		}

		public string				Name	{ get; set; }
		public ICollection<Tweet>	Tweets	{ get; set; }
	}
}
