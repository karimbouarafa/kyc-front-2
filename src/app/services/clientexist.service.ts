import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '../../../node_modules/@angular/common/http';
import { Data } from '../../../node_modules/@angular/router';
import { Client } from '../models/client.model';

@Injectable({
	providedIn: 'root'
})
export class ClientexistService {

	historic: Client[] = [{
		civilité: '', nom: '', prénom: '', datedenaissance: '', lieudenaissance: '', adressepostale: '',

	}];
	me: String;
	client: number;


	constructor(private httpClient: HttpClient) {
		this.getHistoricFromServer();


	}

	AddHistoric2(civilité: String, nom: String, prénom: String, datedenaissance: String,
		lieudenaissance: String, adressepostale: String) {
		const H = new Client(civilité, nom, prénom, datedenaissance, lieudenaissance, adressepostale)
		this.historic.push(H);
		console.log(this.historic);

	}
	AddHistoric(client: Client) {
		this.historic.push(client);
		console.log(this.historic);

	}

	getClient(nom: String, prénom: String, datedenaissance: String) {
		if (this.historic == null) { return false }
		for (var _j = 0; _j < this.historic.length; _j++) {
			if (this.historic[_j].nom == nom && this.historic[_j].prénom == prénom &&
				this.historic[_j].datedenaissance == datedenaissance) {
				return this.historic[_j];
			}
		}
	}
	doesClientExist(nom: String, prénom: String, datedenaissance: String) {
		if (this.historic == null) { return false }
		for (var _j = 0; _j < this.historic.length; _j++) {

			if (this.historic[_j].nom == nom && this.historic[_j].prénom == prénom &&
				this.historic[_j].datedenaissance == datedenaissance) {
				return true;
			}
		}
		return false;
	}

	saveHistoricToServer() {

		this.httpClient
			.put('https://historique2-59119.firebaseio.com/historic.json', this.historic)
			.subscribe(
				() => {
					console.log('enregistrement réussi');
				},
				(error) => {
					console.log('Erreur ! : ' + error);
				}
			);
	}
	getHistoricFromServer() {

		this.httpClient
			.get<Client[]>('https://historique2-59119.firebaseio.com/historic.json')
			.subscribe(
				(response) => {
					this.historic = response;
					console.log(this.historic);
				},
				(error) => {
					console.log('Erreur ! : ' + error);
				}
			);
	}



}