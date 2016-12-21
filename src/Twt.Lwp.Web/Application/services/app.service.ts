import {Injectable} from "@angular/core";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class AppService
{
	private		mHttp: Http;
	private		mEmpUrl = "api/employee/";

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

	public GetByUser(_url: string, _user: string): Observable<any> {
		return this.mHttp.get(_url + _user)
				.map(response => response.json())
				._catch(this.handleError);
	}	

	public CreateRecord(_url: string, _record: any): Observable<any> {
	
		let body = JSON.stringify(_record);
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
	
		return this.mHttp.post(_url, body, options)
						 .map(res => res.json().message)
						 ._catch(this.handleError);
	}

	public UpdateRecord(_url: string, _record: any, _id: number): Observable<any> {

		var updateUrl = _url + _id;
		var body = JSON.stringify(_record);
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');

		return this.mHttp.put(updateUrl, body, { headers: headers })
						 .map(response => response.json ())
						 ._catch(this.handleError);
	}

	public DeleteRecord(_url: string, _id: string): Observable<string> {
		return this.mHttp.delete(_url + _id)
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