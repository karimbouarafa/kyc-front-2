import { CERTIFICATELIST } from './../mock-data';
import { Injectable } from '@angular/core';


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
