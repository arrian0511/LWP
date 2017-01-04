using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LinqToTwitter;
using Twt.Lwp.Models;

namespace Twt.Lwp.Services
{
	/// <summary>
	/// Twitter Service Interface
	/// </summary>
	public interface ITwitterService
	{
		/// <summary>
		/// Get User Tweet
		/// </summary>
		/// <param name="iAuthModel">[in] Authentication Model</param>
		/// <param name="iUserName">[in] User Name</param>
		/// <param name="iRecordCount">[in] Record Count</param>
		/// <returns>List of Record (Tweets)</returns>
		Task<List<Tweet>> GetUserTweet (TwitterAuth iAuthModel, string iUserName, int iRecordCount = 1);
	}
}
