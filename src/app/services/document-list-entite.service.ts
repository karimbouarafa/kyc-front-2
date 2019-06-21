import { DOCUMENTLIST } from './../mock-data';
import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { ClientService } from './client.service';
import { Docu } from '../models/document.model';


@Injectable({
	providedIn: 'root'
})

export class DocumentListEntiteService {
	documents: Docu[] = [];
	constructor(private httpClient: HttpClient, private clientService: ClientService) { 
		
	}

	getDocumentEntiteColumns(): string[] {
		return ["nomDoc", "dateA", "status", "dateE"];
	}
	getDocumentEntiteListClient(){
			var D: Docu[]=[];
		
		for (var _i = 0; _i < this.documents.length; _i++) {
			
			var str = new String(this.clientService.nom+this.clientService.prénom+this.clientService.datedenaissance);
			console.log("Yovopp:"+str);;
		
			if(this.documents[_i]['client'] == str){
					D.push(this.documents[_i]);
			}
	}
	return D;
	}

	getDocumentEntiteList() {
		
	//	return DOCUMENTLIST;
//	var documents: Docu[] = [];
		this.httpClient
		.get<any[]>('http://localhost:10010/api/template/docs')
			.subscribe(
				(response) => {
					let res = response;
					
					for (var _i = 0; _i < res.length; _i++) {
						this.documents.push(res[_i]['state']['data']);
						
											}
				
	
				console.log("testttxx:"+this.documents);
				},
				(error) => {
					console.log('Erreur ! : ' + error);
				}
			);

												
			console.log("testtt:"+this.documents);
			//return documents; 
	}



	



}
