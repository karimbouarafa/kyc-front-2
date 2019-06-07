import { Injectable } from '@angular/core';
import { Subject } from '../../../node_modules/rxjs';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Certificat } from '../models/certificat.model';

@Injectable({
	providedIn: 'root'
})
export class PiecesService {

	constructor(private httpClient: HttpClient) {
		this.getCertificatsFromServer();
	}

	certificats: Certificat[] = [];

	getCertificatsFromServer() {
		this.httpClient
			.get<any[]>('http://localhost:10007/api/template/RequestCertificate')
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