import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { ClientService } from '../services/client.service';




@Component({
	selector: 'app-consulter-certificat',
	templateUrl: './consulter-certificat.component.html',
	styleUrls: ['./consulter-certificat.component.css'],
})
export class ConsulterCertificatComponent implements OnInit {

	@Input() index: string;
	@Input('certificat') certificatElement: string;
	dateCreation: string;
	statutCertificat: string;
	commentaireCertificat: string;


	constructor(private clientService: ClientService) {
	}

	ngOnInit() {
		this.dateCreation = this.certificatElement["dateCreation"]
		this.commentaireCertificat = this.certificatElement["description"]
		console.log("commentaire certificat")

	}

	changeCertificat() {

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

