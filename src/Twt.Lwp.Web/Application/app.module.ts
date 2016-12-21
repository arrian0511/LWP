import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
// import {Ng2BootstrapModule} from "ng2-bootstrap/ng2-bootstrap";
import "rxjs/Rx";

import {AppService} from "./services/app.service";

import {AppComponent} from "./components/app.component";
import {TweetComponent} from "./components/tweet/tweet.component";

import {AppRouting} from "./app.routing";

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
		// Ng2BootstrapModule,
		AppRouting
	],
	providers: [
		AppService
	],
	bootstrap: [
		AppComponent
	]
})

export class AppModule { }