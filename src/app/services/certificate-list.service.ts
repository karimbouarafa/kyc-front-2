import { CERTIFICATELIST } from './../mock-data';
import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Certificat } from '../models/certificat.model';
import { ClientService } from './client.service';



@Injectable({
	providedIn: 'root'
})
export class CertificateListService {

	constructor(private httpClient: HttpClient, private clientService: ClientService) { }


	getCertificateColumns(): string[] {
		return ["status", "initiator", "dateCreation"];
	}
	getCertificateList(): Certificat[] {
		// return CERTIFICATELIST;
		var certificats: Certificat[] = [];
		this.httpClient
			.get<any[]>('http://localhost:10010/api/template/getCertificat0?client='+this.clientService.idclient())
			.subscribe(
				(response) => {
					let res = response;
					for (var _i = 0; _i < res.length; _i++) {
						certificats.push(res[_i]['state']['data']);
					}
				},
				(error) => {
					console.log('Erreur ! : ' + error);
				}
			);
					return certificats;
		//@karim -> tu as juste à mettre ton get ici et t'assurer que ce qui est retourné est la partie 'data' de la réponse
	}
}
