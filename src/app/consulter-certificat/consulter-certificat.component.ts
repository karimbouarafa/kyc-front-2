import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { ClientService } from '../services/client.service';
import { HttpClient } from '@angular/common/http';




@Component({
	selector: 'app-consulter-certificat',
	templateUrl: './consulter-certificat.component.html',
	styleUrls: ['./consulter-certificat.component.css'],
})
export class ConsulterCertificatComponent implements OnInit {

	@Input() index: string;
	@Input('certificat') certificatElement: string;
	@Input() entiteUtilisateur: string;
	@Input() idClient: string;
	dateCreation: string;
	statutCertificat: string;
	commentaireCertificat: string;
	dateProchaineCertif: string;
	profil: string;
	initiateur: string;
	documentsCertificat: string[];
	dataTarget: string;
	modalId: string;
	certificatId: string;


	constructor(private clientService: ClientService, private httpClient: HttpClient) {
	}

	ngOnInit() {
		this.dateCreation = this.certificatElement["dateCreation"]
		this.commentaireCertificat = this.certificatElement["description"]
		this.statutCertificat = this.certificatElement["status"]
		this.dateProchaineCertif = this.certificatElement["dateProchaineCert"]
		this.profil = this.certificatElement["profil"]
		this.documentsCertificat = this.certificatElement["documents"]
		this.initiateur = this.certificatElement["initiator"]
		this.dataTarget = "#myModal".concat(this.index)
		this.modalId = "myModal" + this.index
		this.certificatId = this.certificatElement["cert"]
	}

	isEntiteSameAsUser() {
		// console.log("initiateurDoc: ".concat(this.initiateur))
		// console.log("entiteUser: ".concat(this.entiteUtilisateur))
		if (this.entiteUtilisateur == this.initiateur) {
			// console.log("meme entite")
			return true
		} else {
			// console.log("pas la meme entite")
			return false
		}
	}

	

	revoquer(){
		this.httpClient
		.put("http://localhost:10010/api/template/updateCertificate?cert="+this.certificatId+"&status=3",{
		  "certificatId": "22",
		  "status": "33",
			  })
		.subscribe(
		  () => {
			console.log('révoquation done');
					},
		  (error) => {
			console.log('Erreurrrr ! : ' + error);
		  }
		);
	}
	finmaintien(){
		this.httpClient
		.put("http://localhost:10010/api/template/updateCertificate?cert="+this.certificatId+"&main=2",{
		  "certificatId": "22",
		  "status": "33",
			  })
		.subscribe(
		  () => {
			console.log('fin maintenance done');
					},
		  (error) => {
			console.log('Erreurrrr ! : ' + error);
		  }
		);
	}
	nom() {
		return this.clientService.nom;
	}
	prenom() {
		return this.clientService.prénom;
	}
	datedenaissance() {
		return this.clientService.datedenaissance;
	}

}

