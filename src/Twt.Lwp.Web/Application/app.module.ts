import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import "rxjs/Rx";

import {AppService} from "./services/app.service";

import {AppComponent} from "./components/app.component";

import {TweetComponent} from "./components/tweet/tweet.component";

@NgModule({
	declarations: [
		AppComponent,
		TweetComponent,
	],
	imports: [
		BrowserModule,
		HttpModule,
		FormsModule,
		ReactiveFormsModule,
	],
	providers: [
		AppService
	],
	bootstrap: [
		AppComponent
	]
})

export class AppModule { }