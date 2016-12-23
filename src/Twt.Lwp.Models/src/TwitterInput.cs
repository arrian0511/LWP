using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Twt.Lwp.Models
{
	/// <summary>
	/// Twitter Input Model Class
	/// </summary>
	public class TwitterInput
	{
		/// <summary>
		/// Constructor
		/// </summary>
		public TwitterInput ()
		{
			/// Initialize Member Variables <BR>
			this.UserName		= string.Empty;
			this.RecordCount	= 0;
		}

		/// <summary>
		/// User Name
		/// </summary>
		public string UserName		{ get; set; }

		/// <summary>
		/// Record Count
		/// </summary>
		public int RecordCount	{ get; set; }
	}
}
