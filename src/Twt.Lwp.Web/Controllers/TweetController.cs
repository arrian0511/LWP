using System;
using System.Collections.Generic;
using System.Linq;
//using System.Net.Http;
using Microsoft.AspNetCore.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Twt.Lwp.Models;
using System.Net.Http;

namespace Core.Emp.Sys.Main.Controllers
{
	[Route("api/[controller]")]
	[ResponseCache(CacheProfileName = "PrivateCache")]
	public class TweetController : Controller
	{
		//	private IEntityService<int, Employee>	_EmployeeService = null;		// Employee Service

		//	/// <summary>
		//	/// Constructor
		//	/// </summary>
		//	/// <param name="iContext">[in] DB Context</param>
		//	public EmployeeController (EmployeeSystemContext iContext)
		//	{
		//		/// Initialize Member Variables <BR>
		//		_EmployeeService = new EntityService<int, Employee> (iContext);
		//	}

		/// <summary>
		/// Constructor
		/// </summary>
		public TweetController ()
		{
			/// Initialize Member Variables <BR>
		}

		// GET: api/values
		[HttpGet("GetAll")]
		public async Task<IActionResult> GetAll ()
		{
			/// Get All Records <BR>
			var _allrecord = new object ();
			return new JsonResult (_allrecord, DefJsonFormat);
		}
		

		// GET: api/values
		[HttpGet("GetByUser/{name}")]
		public async Task<IActionResult> GetByUser (string name)
		{
			////string _url = "http://search.twitter.com/search.json?q=pluralsight";
			//string _url = "https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=twitterapi&count=2";
			var _allrecord = new User ();			// User Information
			var _tweetList = new List<Tweet> ();	// Tweet List

			//var _client = new HttpClient();
			//var _task = await _client.GetAsync (_url);
			//var _response = await _task.Content.ReadAsAsync<List<Tweet>> ();


			//var _task = _client.GetAsync (_url).ContinueWith ((_taswithmsg) => 
			//{
			//	var		_response = _taswithmsg.Result;
			//	var		_jsonTask = _response.Content.ReadAsStringAsync();
			//	_jsonTask.Wait ();

			//	var		_jsonObject = _jsonTask.Result;
			//	_allrecord.AddRange (
			//		(from JsonObject
			//});


			//
			// TODO: Get Record on Twitter Here
			//
			/// Get All Records <BR>
			_tweetList.Add (new Tweet () { Title = "First Tweet", Message = "The Modify Note command will be started and the main window will be displayed. Even if no product No. is open, this command can be executed in the Harness Drawing Input,  Customer Module Design, Sub-assy Design and Full-size Drawing Design modes.  If the user section’s constant server has not been registered in the common master <Server ID>(0079) when starting the command, the error message “e-201” will be displayed and the", RetweetCount = 3, LikeCount = 1 });
			_tweetList.Add (new Tweet () { Title = "Second Tweet", Message = "The Modify Note command will be started and the main window will be displayed. Even if no product No. is open, this command can be executed in the Harness Drawing Input,  Customer Module Design, Sub-assy Design and Full-size Drawing Design modes.  If the user section’s constant server has not been registered in the common master <Server ID>(0079) when starting the command, the error message “e-201” will be displayed and the", RetweetCount = 2, LikeCount = 2 });
			_tweetList.Add (new Tweet () { Title = "Third Tweet", Message = "The Modify Note command will be started and the main window will be displayed. Even if no product No. is open, this command can be executed in the Harness Drawing Input,  Customer Module Design, Sub-assy Design and Full-size Drawing Design modes.  If the user section’s constant server has not been registered in the common master <Server ID>(0079) when starting the command, the error message “e-201” will be displayed and the", RetweetCount = 1, LikeCount = 1 });
			_allrecord = new User () { Name = name, Tweets = _tweetList };

			/// Return JSON Result <BR>
			return new JsonResult (_allrecord, DefJsonFormat);
		}

		//	// GET api/values/5
		//	[HttpGet("GetById/{id}")]
		//	public async Task<IActionResult> GetById (int id)
		//	{
		//		/// Get Record By ID <BR>
		//		var _record = await _EmployeeService.GetByIdAsync (id);
		//		return new JsonResult (_record, DefJsonFormat);
		//	}

		//	// POST api/values
		//	[HttpPost("Create")]
		//	public async Task<IActionResult> Create ([FromBody]Employee value)
		//	{
		//		object			resMsg	= new object ();				// Response Message
		//		EServiceStatus	retStat	= EServiceStatus.SUCCESS;		// Return Status

		//		/// Set Bad Request in case the value is null <BR>
		//		if (value == null) {
		//			resMsg = "Error" + BadRequest ().StatusCode.ToString ();
		//			goto LABELEND;
		//		}

		//		/// Save Record <BR>
		//		var result = new JsonResult (value, DefJsonFormat);
		//		retStat = await _EmployeeService.CreateAsync (result.Value as Employee);
		//		resMsg = "Successfully Created!";

		//	LABELEND:
		//		/// Return result message <BR>
		//		return new JsonResult(resMsg, DefJsonFormat);
		//	}

		//	// PUT api/values/5
		//	[HttpPut("Update/{id}")]
		//	public async Task<IActionResult> Update (int id, [FromBody]Employee value)
		//	{
		//		string			resMsg	= string.Empty;				// Response Message
		//		EServiceStatus	retStat	= EServiceStatus.SUCCESS;	// Return Status

		//		/// Set Response Message in case the value is null <BR>
		//		if (value == null) {
		//			resMsg = "Error NULL: " + BadRequest ().StatusCode.ToString ();
		//			goto LABELEND;
		//		}

		//		/// Get Record First to check if exist <BR>
		//		var		_curData = await _EmployeeService.GetByIdAsync (id);
		//		if(_curData != null) {
		//			_curData.UserID     = value.UserID;
		//			_curData.FirstName  = value.FirstName;
		//			_curData.LastName   = value.LastName;
		//			_curData.City       = value.City;

		//			/// Update Record <BR>
		//			retStat = await _EmployeeService.UpdateAsync(_curData);
		//			resMsg = "Successfully Updated!";
		//		}
		//		else {
		//			resMsg = "Error" + BadRequest ().StatusCode.ToString ();
		//			goto LABELEND;
		//		}

		//	LABELEND:
		//		/// Return result message <BR>
		//		return new JsonResult(resMsg, DefJsonFormat);
		//	}

		//	// DELETE api/values/5
		//	[HttpDelete("Delete/{id}")]
		//	public async Task<IActionResult> Delete (int id)
		//	{
		//		object			resMsg	= new object ();				// Response Message
		//		EServiceStatus	retStat	= EServiceStatus.SUCCESS;		// Return Status

		//		/// Get Record First to check if exist <BR>
		//		var		_curData = await _EmployeeService.GetByIdAsync (id);
		//		if(_curData != null) {

		//			/// Delete Record <BR>
		//			retStat = await _EmployeeService.DeleteAsync (_curData);
		//			resMsg = "Successfully Deleted!";
		//		}
		//		else {
		//			resMsg = "Error" + BadRequest ().StatusCode.ToString ();
		//			goto LABELEND;
		//		}

		//	LABELEND:
		//		/// Return result message <BR>
		//		return new JsonResult(resMsg, DefJsonFormat);
		//	}

		/// <summary>
		/// Default JSON Format <BR>
		/// </summary>
		private JsonSerializerSettings DefJsonFormat
		{
			get
			{
				return new JsonSerializerSettings
				{
					Formatting = Formatting.Indented
				};
			}
		}
		
	}
}
