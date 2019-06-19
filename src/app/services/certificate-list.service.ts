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

		//@karim -> tu as juste à mettre ton get ici et t'assurer que ce qui est retourné est la partie 'data' de la réponse
	}
}
