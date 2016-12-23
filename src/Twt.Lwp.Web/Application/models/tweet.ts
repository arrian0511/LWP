export class Tweet
{
	public Message:			string;
	public CreatedDate:		Date;
	public RetweetCount: 	number;
	public LikeCount: 		number;

	constructor() {
		this.CreatedDate	= new Date();
		this.Message		= "";
		this.RetweetCount	= 0;
		this.LikeCount		= 0;
	}
}