using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Twt.Lwp.Models;
using Xunit;

namespace Twt.Lwp.Services.Test
{
	/// <summary>
	/// Twitter Service Test
	/// </summary>
	public class TestTwitterService : IDisposable
	{
		private			TwitterAuth		_mAuthentication = new TwitterAuth ();

		/// <summary>
		/// Constructor (TestInitialize/SetUp)
		/// </summary>
		public TestTwitterService ()
		{
			/// Initialize Member Variables <BR>
			this._mAuthentication.ConsumerKey = "n4IGD0jSfJx0ZNgAbctyCvj3j";
			this._mAuthentication.ConsumerSecret = "PAB0NEKcdd6yuriRKVT4cWo68U1tS708ocOpJxUuH4fmrNX7sE";
			this._mAuthentication.OAuthToken = "811587312526172160-xH4as35m9j0ITI87jYSMQvVz2GSohHH";
			this._mAuthentication.OAuthTokenSecret = "whrkXypm1ynPR1lSj09OU2wDvg8rlvDeInZl1425BI0kP";
		}

		/// <summary>
		/// Destructor (TearDown/TestCleanup)
		/// </summary>
		public void Dispose ()
		{
			/// Release Member Variables <BR>
		}

		/// <summary>
		/// Test User Screen Name
		/// </summary>
		[Fact]
		public void TestUserScreenName ()
		{
			ITwitterService		_service = new TwitterService ();
			var _data = _service.GetUserTweet (_mAuthentication, "@MacquarieTelco", 5);
			Assert.Equal ("@MacquarieTelco", _data.Result[0].ProfInfo.UserName);
		}

		/// <summary>
		/// Test Tweet Count
		/// </summary>
		[Fact]
		public void TestTweetCount ()
		{
			ITwitterService		_service = new TwitterService ();
			var _data = _service.GetUserTweet (_mAuthentication, "@MacquarieTelco", 15);
			Assert.Equal (15, _data.Result.Count);
		}
	}
}
