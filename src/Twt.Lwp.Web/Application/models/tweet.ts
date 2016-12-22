export class Tweet
{
	public Title: 			string;
	public Message:			string;
	public RetweetCount: 	number;
	public LikeCount: 		number;

	constructor() {
		this.Title			= "";
		this.Message		= "";
		this.RetweetCount	= 0;
		this.LikeCount		= 0;
	}
}