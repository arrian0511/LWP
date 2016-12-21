import {Component, Input, trigger, state, style, transition, keyframes, animate, ChangeDetectorRef} from '@angular/core';

@Component({
	selector: 'app',
	templateUrl: "views/app.html"
})

export class AppComponent
{
	public mUserName: 		string;
	public mStatus:			string;
	public mPosition:		string;
	public mImgUrl: 		string;

	constructor() {
		this.mUserName = "Arrian Pascual";
		this.mStatus = "Online";
		this.mPosition = "Software Developer";
		this.mImgUrl = "contents/img/user3-128x128.jpg";
	}
}