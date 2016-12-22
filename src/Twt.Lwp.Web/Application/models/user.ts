import {Tweet} from "./tweet";

export class User
{
	public Name:		string;
	public Tweets:		Array<Tweet>;

	constructor() {
		this.Name 		= "";
		this.Tweets 	= new Array<Tweet>();
	}
}