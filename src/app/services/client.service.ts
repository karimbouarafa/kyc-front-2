import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '../../../node_modules/@angular/common/http';
import { Data } from '../../../node_modules/@angular/router';


@Injectable({
	providedIn: 'root'
})
export class ClientService {
	nom: string;
	prénom: string;
	datedenaissance: string;
	constructor(private httpClient: HttpClient) {
	}



	idclient() {

		var str = new String(this.nom.concat(this.prénom).concat(this.datedenaissance));

		return str.toString();
	}
	isClientInDatabase() {
		if (this.idclient() == "clientexistant1406") {
			console.log("client trouvé")
			return true
		}
		else {
			console.log("client inexistant")
			return false
		}
	}



}