using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LinqToTwitter;
using Microsoft.Data.Entity;
using Twt.Lwp.Models;

namespace Twt.Lwp.Services
{
	/// <summary>
	/// Twitter Service Class
	/// </summary>
	public class TwitterService : ITwitterService
	{
		/// <summary>
		/// Get User Tweet
		/// </summary>
		/// <param name="iAuthModel">[in] Authentication Model</param>
		/// <param name="iUserName">[in] User Name</param>
		/// <param name="iRecordCount">[in] Record Count</param>
		/// <returns>List of Record (Tweets)</returns>
		public async Task<List<Tweet>> GetUserTweet (TwitterAuth iAuthModel, string iUserName, int iRecordCount = 1)
		{
			int					_seqno		= 0;					// Sequential No.
			int					_itemcount	= 0;					// Item Counter
			string				_message	= string.Empty;			// Message Status
			List<Tweet>			_tweetList	= new List<Tweet> ();	// Tweet List

			try {

				/// Set Authentication Data
				var auth = new SingleUserAuthorizer
				{
					CredentialStore = new InMemoryCredentialStore
					{
						ConsumerKey 		= iAuthModel.ConsumerKey,
						ConsumerSecret 		= iAuthModel.ConsumerSecret,
						OAuthToken 			= iAuthModel.OAuthToken,
						OAuthTokenSecret 	= iAuthModel.OAuthTokenSecret
					}
				};

				/// Filter All Record From User and Count
				var twitterCtx = new TwitterContext(auth);
				var tweets = (from tweet in twitterCtx.Status
								where tweet.Type == StatusType.User
									&& tweet.ScreenName == iUserName
								select tweet);

				/// Await Task (Obtain Record)
				var tweetTmplist = await tweets.ToListAsync ();
				foreach (var item in tweetTmplist) {
					Tweet		_tweetInfo = new Tweet ();		// Tweet Information

					_tweetInfo.CreatedDate		= item.CreatedAt.Date;
					_tweetInfo.Message			= item.Text;
					_tweetInfo.RetweetCount		= item.RetweetCount;
					_tweetInfo.LikeCount		= item.FavoriteCount == null ? 0 : (int)item.FavoriteCount;

					// Set Profile Information
					_tweetInfo.ProfInfo.ImageUrl = item.User.ProfileImageUrl;
					_tweetInfo.ProfInfo.UserName = item.ScreenName;

					_tweetList.Add (_tweetInfo);
					++_itemcount;
					if (_itemcount == iRecordCount) break;
				}
			}
			catch (Exception ex) {

				/// Set No Record Found
				_message = ex.Message;
			}

			/// Add Empty Record Tweet In case of No search found
			if (_tweetList == null || _tweetList.Count == 0) {

				/// Set No Record Found
				Tweet		_tweetInfo = new Tweet ();		// Tweet Information

				_tweetInfo.CreatedDate		= DateTime.Now;
				_tweetInfo.Message			= String.Concat ("No Record Found. ", _message);
				_tweetInfo.RetweetCount		= 0;
				_tweetInfo.LikeCount		= 0;

				_tweetList.Add (_tweetInfo);
			}

			/// Sort Records In Descending Order Based on Rate <BR>
			_tweetList.Sort (delegate (Tweet _iFirst, Tweet _iSecond) {
				// Return Comparison Value
				return _iSecond.Rate.CompareTo (_iFirst.Rate);
			});

			/// Set Item No. <BR>
			foreach (var _item in _tweetList) {
				_item.No = ++_seqno;
			}

			/// Return Record List <BR>
			return _tweetList;
		}
	}
}
