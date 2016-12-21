import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import {TweetComponent} from "./components/tweet/tweet.component";

const routes: Routes = [
	// {
	// 	path: '',
	// 	redirectTo: '/home',
	// 	pathMatch: 'full'
	// },
	{
		path: 'tweet',
		component: TweetComponent
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [
		RouterModule
	]
})

export class AppRouting { }