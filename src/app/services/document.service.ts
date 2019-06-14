import { Injectable } from '@angular/core';
import { Subject } from '../../../node_modules/rxjs';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Docu } from '../models/document.model';
import { ClientService } from './client.service';

@Injectable({
	providedIn: 'root'
})
export class DocumentsService {


	constructor(private httpClient: HttpClient, private clientService: ClientService) {

		this.getDocumentsFromServer();


	}

	documents: Docu[] = [];
	mydocs: Docu[] = [];
	notmydocs: Docu[] = [];
	documentsSubject = new Subject<Docu[]>();

	emitdocuments() {
		this.documentsSubject.next(this.documents);
		this.MyDocuments();
		this.notMyDocuments();
	}

	clientexist() {
		if (this.documents.length = 0) { return false }
		else { return true; }
	}
	adddocument(d: Docu) {
		this.mydocs.push(d);
	}


	getDocumentsFromServer() {
		this.httpClient
			.get<any[]>('http://localhost:10010/api/template/dossier?client=' + this.clientService.idclient())
			.subscribe(
				(response) => {
					let res = response;
					for (var _i = 0; _i < res.length; _i++) {
						this.documents.push(res[_i]['state']['data']);
					}
					this.emitdocuments();
				},
				(error) => {
					console.log('Erreur ! : ' + error);
				}
			);
	}




	CreateDoc(nomdoc: string, status: string, expire: string) {
		this.httpClient
			.put("http://localhost:10010/api/template/CreateDoc?client=" + this.clientService.idclient() + "&doc=0&status=" + status + "&nomdoc=" + nomdoc + "&expire=" + expire, {
				"status": "33",
				"expire": "44",
				"nomdoc": "12",
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



	MyDocuments() {

		for (var _j = 0; _j < this.documents.length; _j++) {
			if (this.documents[_j]['initiator'] == "O=Natixis Assurance, L=Paris, C=FR") {
				this.mydocs.push(this.documents[_j])
			}
		}

	}
	notMyDocuments() {

		for (var _j = 0; _j < this.documents.length; _j++) {
			if (this.documents[_j]['initiator'] != "O=Natixis Assurance, L=Paris, C=FR") {
				this.notmydocs.push(this.documents[_j])
			}
		}
	}

	getDocumentInformation(client: string, doc: string) {

		this.httpClient.get<any[]>('http://localhost:10010/api/template/dossier?client=10', {
			params: {
				doc: doc,
				client: client
			}
		})
			.subscribe(
				(response) => {
					let res = response;
					return res['state']['data']
				},
				(error) => {
					console.log('Erreur ! : ' + error);
				});
	}

	getListDocumentOfClient(client: string) {

		this.httpClient.get<any[]>('http://localhost:10010/api/template/dossier?client=10', {
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