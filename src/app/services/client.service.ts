import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '../../../node_modules/@angular/common/http';
import { Data } from '../../../node_modules/@angular/router';


@Injectable({
	providedIn: 'root'
})
export class ClientService {
	civilité: string;
	nom: string;
	prénom: string;
	datedenaissance: string;
	lieudenaissance: string;
	adressepostale: string;
	idClient: String;
	constructor(private httpClient: HttpClient) {
	}



	idclient() {
		//	var str: String(this.nom+this.prénom+this.datedenaissance);
		console.log("string:"+this.nom+this.prénom+this.datedenaissance);
		return this.nom+this.prénom+this.datedenaissance;

		//return str.toString();
	}   


	/*
	isClientInDatabase() {
		if (this.idclient() == "clientexistant1406") {
			console.log("client trouvé")
			return true
		}
		else {
			console.log("client inexistant")
			return false
		}
	}  */



}