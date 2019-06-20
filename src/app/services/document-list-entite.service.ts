import { DOCUMENTLIST } from './../mock-data';
import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { ClientService } from './client.service';
import { Docu } from '../models/document.model';


@Injectable({
	providedIn: 'root'
})

export class DocumentListEntiteService {

	constructor(private httpClient: HttpClient, private clientService: ClientService) { }

	getDocumentEntiteColumns(): string[] {
		return ["nomDoc", "dateA", "status", "dateE"];
	}

	getDocumentEntiteList(): Docu[] {

		var documents: Docu[];
		this.httpClient
			.get<any[]>('http://localhost:10010/api/template/dossier?client=karimkarim2019-06-19')
			.subscribe(
				(response) => {
					documents = DOCUMENTLIST.map(doc => doc["state"]["data"])
				},
				(error) => {
					console.log('Erreur ! : ' + error);
				}
			);
		return documents;
	}







}
