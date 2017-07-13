import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

@Injectable()
export class AppHttpService {

	constructor(private _http: Http) { }

	requestData(dataSource) {
		return this._http.get(dataSource)
		.map(res => res.json())
		.filter(res => res.json().web_name === "Cahill");
	}

}
