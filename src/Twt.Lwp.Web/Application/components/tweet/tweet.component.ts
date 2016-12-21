import {Router, ActivatedRoute}		from "@angular/router";
import {Component} from "@angular/core";

import {TAppDefinition} from "../../definition/app.definition";
import {Tweet} from "../../models/tweet";

import {AppService}	from "../../services/app.service";

@Component({
  selector: "home",
  templateUrl: "views/tweet/tweet.html"
})

export class TweetComponent
{
	public mApiUrl:		string
	public mTweets:		Array<Tweet>

	// Providers
	private		_mService:		AppService;
	private		_mRouter:		Router;
	private		_mActiveRoute:	ActivatedRoute;

	/// Constructor
	constructor(iService:		AppService,
				iRouter:		Router,
				iActiveRoute:	ActivatedRoute) {

		this._mService		= iService;
		this._mRouter		= iRouter;
		this._mActiveRoute	= iActiveRoute;

		this.mApiUrl = "api/tweet/"
		this.mTweets = new Array<Tweet>();
	}


	private _OnGetAllRecord() {

		/// Get All Record
		var data = this._mService.GetAll (this.mApiUrl + "GetAll");
		data.subscribe(
			_data => {
				this.mTweets = _data;
			},
			_error => {
				//this.errCord = _error;
			}
		);
	}	

	/// On Click Get Record
	public OnClickGetRecord (_user: string)
	{
		var _record = this._mService.GetByUser (this.mApiUrl + "GetByUser/", _user);

		// Clear Current Record 
		this.mTweets = new Array<Tweet>();

		// Set Data to forms
		_record.subscribe(item => {
			var	_tweet = item as Tweet;		// Employee Data
			this.mTweets.push (_tweet);
		});
	}
}
