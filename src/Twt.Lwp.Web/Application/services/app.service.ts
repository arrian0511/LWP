import {Injectable} from "@angular/core";
import {Http, Response, Headers, RequestOptions, URLSearchParams} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {TwitterInput} from "../models/twitterinput";

@Injectable()
export class AppService
{
	private		mHttp: Http;

	constructor(iHttp: Http) {
		this.mHttp = iHttp;
	}

	public GetAll (_url: string): Observable<any> {
		return this.mHttp.get(_url)
				.map(response => response.json())
				._catch(this.handleError);
	}

	public GetById(_url: string, _id: number): Observable<any> {
		return this.mHttp.get(_url + _id)
				.map(response => response.json())
				._catch(this.handleError);
	}

	public GetByUser(_url: string, _user: string, _count: number): Observable<any> {
		// let 	params = new URLSearchParams ();
		// params.set('name', 'Arrian');

		return this.mHttp.get(_url + _user)
				.map(response => response.json())
				._catch(this.handleError);
	}	

	public GetByInput(_url: string, _input: TwitterInput): Observable<any> {
		// let 	params = new URLSearchParams ();
		// params.set('name', 'Arrian');

		return this.mHttp.get(_url + _input)
				.map(response => response.json())
				._catch(this.handleError);
	}		

	private extractData(_response: Response) {
		let	body = _response.json ();
		return body.data || {};
	}

	private handleError(_error: Response | any) {
		let errMsg: string;

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