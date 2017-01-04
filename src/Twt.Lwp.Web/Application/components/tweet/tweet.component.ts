import {Component, OnInit}								from "@angular/core";
import {FormBuilder, FormGroup, FormControl, Validators} from "@angular/forms";

import {TAppDefinition} 	from "../../definition/app.definition";
import {Tweet} 				from "../../models/tweet";
import {User} 				from "../../models/user";
import {Profile} 			from "../../models/profile";

import {AppService}			from "../../services/app.service";

///
/// Tweet Toggle Information
///
export class TweetToggleInfo
{
	public	TweetNo:	string;
	public	IsActive:	boolean;

	constructor(_tweetNo: string, _isActive: boolean) {
		this.TweetNo	= _tweetNo;
		this.IsActive 	= _isActive;
	}
};

@Component({
  selector: "tweet",
  templateUrl: "views/tweet/tweet.html"
})

///
/// Tweet Component
///
export class TweetComponent implements OnInit
{
	// Twitter Data
	public		mIsLoading:			boolean;					// Loading Flag
	public		mTweets:			Array<User>;				// Tweet List
	public		mFormCreate:		FormGroup;					// Form Create

	private		_mApiUrl:			string;						// WEB-API URL
	private		_mTweetToggleInfo:	Array<TweetToggleInfo>;		// Tweet Toggle Information

	// Providers
	private		_mService:		AppService;			// Application Service
	private		_mFb:			FormBuilder;		// Builder

	// Controls
	private		_mTxtUserName:	FormControl;		// User Name Form Control
	private		_mTxtRecCount:	FormControl;		// Record Count

	///
	/// Constructor
	///
	constructor(iService:		AppService,
				iFb:			FormBuilder) {

		/// Initialize Member Variables
		this._mService		= iService;
		this._mFb 			= iFb;
		this.mIsLoading 	= false;
		this._mApiUrl 		= "api/tweet/"
		this.mTweets 		= new Array<User>();
		this._mTweetToggleInfo	= new Array<TweetToggleInfo>();
	}

	///
	/// Initialization
	///
	ngOnInit() {

		/// Initialize Form Conrols
		this._OnInitForm ();
	}

	///
	/// On Initialize Form Layout
	///
	private _OnInitForm() {

		/// Set Control
		this._mTxtUserName	= new FormControl (null, Validators.required);
		this._mTxtRecCount	= new FormControl (null, Validators.required);

		/// Set Form Data
		this.mFormCreate = this._mFb.group({
			UserName:	this._mTxtUserName,
			RecCount:	this._mTxtRecCount
		});
	}

	///
	/// On Click Submit Button Event
	///
	private _OnSubmitForm(_event: any, _value: any) {
		// Clear Current Record 
		this.mTweets 			= new Array<User>();
		this._mTweetToggleInfo 	= new Array<TweetToggleInfo>();

		this.mIsLoading = true;

		// Get Record From Web API
		var _record = this._mService.GetByUser (this._mApiUrl + "GetByUser/", 
												this._mTxtUserName.value, 
												this._mTxtRecCount.value);
		_record.subscribe(item => {
			var	_tweet = item as Array<User>;		// Employee Data
			this.mTweets = _tweet;
			this.mIsLoading = false;
		});
	}	

	///
	/// On Get Creation Date
	///
	private _OnGetCreDate(_itemDate: Date): string {
		let		strDate:		string;	// String Date
		let		_customdate:	Date;	// Custom Date

		/// Convert Date
		_customdate = new Date(parseInt(_itemDate.toString().match(/\d+/)[0], 10));

		/// Set String Date
		if (_customdate != null) {
			strDate = _customdate.toString ();
		}
		else {
			strDate = "No Date";
		}

		/// Return String Date
		return strDate;
	}

	///
	/// On Click Toggle Tweet
	///
	private _OnClickToggleTweet (_itemNo: number): void {

		/// Add Record if it is not exist
		var toggleInfo = this._mTweetToggleInfo.find (_value => {
			return _value.TweetNo == _itemNo.toString();
		});
		if (toggleInfo == null) {
			this._mTweetToggleInfo.push (new TweetToggleInfo(_itemNo.toString(), false));
		}

		/// Close All Other Tweet Panel
		for (var _idx = 0; _idx < this._mTweetToggleInfo.length; _idx++) {
			if (this._mTweetToggleInfo[_idx].TweetNo == _itemNo.toString()) {
				this._mTweetToggleInfo[_idx].IsActive = !this._mTweetToggleInfo[_idx].IsActive;
			}
			else {
				this._mTweetToggleInfo[_idx].IsActive = false;
			}
		}
	}

	///
	/// Is Active (Tweet)
	///
	private _IsActive (_tweetNo: string): boolean {
		let		_isActive: 	boolean = false;

		/// Add Record if it is not exist
		var toggleInfo = this._mTweetToggleInfo.find (_value => {
			return _value.TweetNo == _tweetNo.toString();
		});
		if (toggleInfo != null) {
			_isActive = toggleInfo.IsActive;
		}

		/// Return Active Status
		return _isActive;
	}
}
