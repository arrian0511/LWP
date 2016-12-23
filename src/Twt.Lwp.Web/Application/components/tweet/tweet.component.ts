import {Component, OnInit}			from "@angular/core";
import {FormBuilder, FormGroup, FormControl, Validators} from "@angular/forms";

import {TAppDefinition} from "../../definition/app.definition";
import {Tweet} from "../../models/tweet";
import {User} from "../../models/user";
import {TwitterInput} from "../../models/twitterinput";

import {AppService}	from "../../services/app.service";

@Component({
  selector: "tweet",
  templateUrl: "views/tweet/tweet.html"
})

export class TweetComponent implements OnInit
{
	// Twitter Data
	public		mApiUrl:		string;				// WEB-API URL
	public		mTweets:		Array<User>;		// Tweet List
	public		mFormCreate:	FormGroup;			// Form Create

	// Providers
	private		_mService:		AppService;			// Application Service
	private		_mFb:			FormBuilder;		// Builder

	// Controls
	private		_mTxtUserName:	FormControl;		// User Name Form Control
	private		_mRecCount:		FormControl;		// Record Count

	///
	/// Constructor
	///
	constructor(iService:		AppService,
				iFb:			FormBuilder) {

		/// Initialize Member Variables
		this._mService		= iService;
		this._mFb 			= iFb;
		this.mApiUrl 		= "api/tweet/"
		this.mTweets 		= new Array<User>();
	}

	ngOnInit() {

		/// Initialize Form Conrols
		this._OnInitForm ();
	}

	private _OnInitForm() {

		/// Set Control
		this._mTxtUserName	= new FormControl (null, Validators.required);
		// this._mRecCount		= new FormControl (null, Validators.required);

		/// Set Form Data
		this.mFormCreate = this._mFb.group({
			UserName:	this._mTxtUserName,
			RecCount:	this._mRecCount
		});
	}

	private _OnClearFormCtl() {

		/// Clear Form Control
		this._mTxtUserName.reset ();
		this._mRecCount.reset ();
	}

	private _OnSubmitForm(_event: any, _value: any) {
		// var _record = this._mService.GetByUser (this.mApiUrl + "GetByUser/", this._mTxtUserName.value + "/", 2);
		//var _record = this._mService.GetByUser (this.mApiUrl + "GetByUser/", this._mTxtUserName.value, 2);
		let input: TwitterInput;
		input = new TwitterInput ();
		input.UserName = "Arrian";
		input.RecordCount = 5;
		var _record = this._mService.GetByInput (this.mApiUrl + "GetByUser/", input);

		//var _data = this._mRecCount.value;
		// Clear Current Record 
		this.mTweets = new Array<User>();

		// Set Data to forms
		_record.subscribe(item => {
			var	_tweet = item as Array<User>;		// Employee Data
			this.mTweets = _tweet;
		});
	}	

	private _OnGetCreDate(_date: Date): string {
		let		strDate:		string;	// String Date
		let		_customdate:	Date;	// Custom Date

		/// Set Custom Date
		_customdate = new Date(_date.toString());

		/// Set String Date
		if (_date != null) {
			strDate = this._ConvertMonth (_customdate.getMonth());
			strDate += " " + _customdate.getDay ();
		}
		else {
			strDate = "No Date";
		}

		/// Return String Date
		return strDate;
	}

	private _ConvertMonth (_iValue: number): string {
		let		monthStr: string;		// String monthStr

		/// Set Month String
		switch (_iValue) {
			case 1:
				monthStr = "January";
				break;
			case 2:
				monthStr = "February";
				break;
			case 3:
				monthStr = "March";
				break;
			case 4:
				monthStr = "April";
				break;
			case 5:
				monthStr = "May";
				break;
			case 6:
				monthStr = "June";
				break;
			case 7:
				monthStr = "July";
				break;
			case 8:
				monthStr = "August";
				break;
			case 9:
				monthStr = "September";
				break;
			case 10:
				monthStr = "October";
				break;
			case 11:
				monthStr = "November";
				break;
			case 12:
				monthStr = "December";
				break;
			default:
				monthStr = "N/A";
				break;
		}

		/// Return Month String
		return monthStr;
	}
}
