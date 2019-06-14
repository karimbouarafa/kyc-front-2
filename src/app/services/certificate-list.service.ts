import { CERTIFICATELIST } from './../mock-data';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Injectable({
	providedIn: 'root'
})
export class CertificateListService {

	constructor() { }


	getCertificateColumns(): string[] {
		return ["status", "initiator", "dateCreation"];
	}
	getCertificateList(): string[] {
		return CERTIFICATELIST;
	}
}
