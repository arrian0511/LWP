import {Component, OnInit}			from "@angular/core";
import {FormBuilder, FormGroup, FormControl, Validators} from "@angular/forms";

import {TAppDefinition} from "../../definition/app.definition";
import {Tweet} from "../../models/tweet";
import {User} from "../../models/user";

import {AppService}	from "../../services/app.service";

@Component({
  selector: "tweet",
  templateUrl: "views/tweet/tweet.html"
})

export class TweetComponent implements OnInit
{
	public mApiUrl:		string;
	public mTweets:		Array<User>;
	public		mFormCreate:	FormGroup;

	// Providers
	private		_mService:		AppService;
	private		_mFb:			FormBuilder;

	// Controls
	private		_mTxtUserName:	FormControl;
	private		_mRecCount:		FormControl;

	/// Constructor
	constructor(iService:		AppService,
				iFb:			FormBuilder) {

		this._mService		= iService;
		this._mFb 			= iFb;

		this.mApiUrl = "api/tweet/"
		this.mTweets = new Array<User>();
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

	public OnSubmitForm(_event: any, _value: any) {
		var _record = this._mService.GetByUser (this.mApiUrl + "GetByUser/", this._mTxtUserName.value);

		//var _data = this._mRecCount.value;
		// Clear Current Record 
		this.mTweets = new Array<User>();

		// Set Data to forms
		_record.subscribe(item => {
			var	_tweet = item as Array<User>;		// Employee Data
			this.mTweets = _tweet;
		});
	}
}
