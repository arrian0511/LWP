import {Profile} from "./profile";

///
/// Tweet Model
///
export class Tweet
{
	public No:				number;
	public Message:			string;
	public ProfInfo:		Profile;
	public CreatedDate:		Date;
	public RetweetCount: 	number;
	public LikeCount: 		number;

	constructor() {
		this.No 			= 0;
		this.Message		= "";
		this.CreatedDate	= new Date();
		this.ProfInfo 		= new Profile();
		this.RetweetCount	= 0;
		this.LikeCount		= 0;
	}
}