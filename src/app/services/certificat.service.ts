import { Injectable } from '@angular/core';
import { Subject } from '../../../node_modules/rxjs';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Certificat } from '../models/certificat.model';
import { ClientService } from './client.service';
import { DocumentListEntiteService } from './document-list-entite.service';

@Injectable({
	providedIn: 'root'
})
export class CertificatService {

	constructor(private httpClient: HttpClient, private clientService: ClientService, private documentListEntiteService: DocumentListEntiteService) {
	//	this.getCertificatsFromServer();
	}

	certificats: Certificat[] = [];

	getCertificatsFromServer() {
		this.httpClient
			.get<any[]>('http://localhost:10010/api/template/RequestCertificate')
			.subscribe(
				(response) => {
					let res = response;
					for (var _i = 0; _i < res.length; _i++) {
						this.certificats.push(res[_i]['state']['data']);
					}
				},
				(error) => {
					console.log('Erreur ! : ' + error);
				}
			);
	}


	CreateCertificate(profil: string, description: string, dateProchaineCertif: string) {
		this.httpClient
			.put("http://localhost:10010/api/template/createCertificate?client=" + this.clientService.idclient() + "&profil=" + profil + "&description=" + description + "&dateProchaineCertif=" + dateProchaineCertif +"&"+ this.documentListEntiteService.getdocURL(), {
				"profil": "33",
				"description": "44",
				"dateProchaineCertif": "12"
			})
			.subscribe(
				() => {
					console.log('document crée réalisé');
				},
				(error) => {
					console.log('Erreurrrr ! : ' + error);
				}
			);
	}

	Mycertificates() {
		var X: Certificat[] = [];
		for (var _j = 0; _j < this.certificats.length; _j++) {
			if (this.certificats[_j]['initiator'] == "O=Natixis Assurance, L=Paris, C=FR") {
				X.push(this.certificats[_j])
			}
		}
		return X;
	}
	notMycertificates() {
		var Y: Certificat[] = [];
		for (var _j = 0; _j < this.certificats.length; _j++) {
			if (this.certificats[_j]['initiator'] != "O=Natixis Assurance, L=Paris, C=FR") {
				Y.push(this.certificats[_j])
			}
		}
		return Y;
	}

	getValidCertificates() {
		var Z: Certificat[] = [];
		for (var _j = 0; _j < this.certificats.length; _j++) {
			if (this.certificats[_j]['initiator'] != "O=Natixis Assurance, L=Paris, C=FR") {
				Z.push(this.certificats[_j])
			}
		}
		return Z;
	}


	getListCertificatOfClient(client: string) {

		this.httpClient.get<any[]>('http://localhost:10007/api/template/RequestCertificate', {
			params: {
				client: client
			}
		})
			.subscribe(
				(response) => {
					let res = response;
					for (var _i = 0; _i < res.length; _i++) {
						var X: Document[] = [];
						X.push(res[_i]['state']['data']);
					}
					return X;
				},
				(error) => {
					console.log('Erreur ! : ' + error);
				});
	}
}