import {Injectable} from "@angular/core";
import {Http, Response, Headers, RequestOptions, URLSearchParams} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class AppService
{
	private		mHttp: Http;		// HTTP Request

	///
	/// Constructor
	///
	constructor(iHttp: Http) {
		this.mHttp = iHttp;
	}

	///
	/// Get Record By User
	///
	public GetByUser(_url: string, _user: string, _count: number): Observable<any> {
		const _finalUrl = _url + _user + "/" + _count;
		return this.mHttp.get(_finalUrl)
				.map(response => response.json())
				._catch(this.handleError);
	}

	///
	/// Data Extraction
	///
	private extractData(_response: Response) {
		let	body = _response.json ();
		return body.data || {};
	}

	///
	/// Error Handler
	///
	private handleError(_error: Response | any) {
		let errMsg: string;		// Error Message

		/// Check Error Instance (Set Message)
		if (_error instanceof Response) {
			const body = _error.json() || '';
			const err = body.error || JSON.stringify(body);
			errMsg = `${_error.status} - ${_error.statusText || ''} ${err}`;
					} 
		else {
			errMsg = _error.message ? _error.message : _error.toString();
		}
		console.error(errMsg);

		return Observable.throw(errMsg || "Server error");
	}
}