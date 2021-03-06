import { UserCredentialsService } from './../services/user-credentials.service';
import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '../../../node_modules/@angular/forms';
import { ClientService } from '../services/client.service';
import { Router } from '../../../node_modules/@angular/router';
import { ClientexistService } from '../services/clientexist.service';
import { DocumentListEntiteService } from '../services/document-list-entite.service';
import { Docu } from '../models/document.model';



@Component({
	selector: 'app-rechercher-client',
	templateUrl: './rechercher-client.component.html',
	styleUrls: ['./rechercher-client.component.css']
})
export class RechercherClientComponent implements OnInit {
	b: Boolean = false;
	constructor(private clientService: ClientService, private router: Router,
		 private clientexistService: ClientexistService, private userCredentialService: UserCredentialsService,
		  private atService: DocumentListEntiteService) { }
	entiteUtilisateur: string;
	entiteUtilisateurRouting = "Natixis";
	documents: Docu[];
	ngOnInit() {
		this.entiteUtilisateur=this.userCredentialService.getEntiteUser()
		this.atService.getDocumentEntiteList();
	}
	onSubmit(form: NgForm) {
		this.b = true;
		console.log('recherche client...');
		this.clientService.nom = form.value['nom'];
		this.clientService.prénom = form.value['prénom'];
		this.clientService.datedenaissance = form.value['datedenaissance'];
		if (this.isClientFound()) {
			this.clientService.civilité = this.clientexistService.getClient(form.value['nom'], form.value['prénom'], form.value['datedenaissance'])['civilité'];
			this.clientService.lieudenaissance = this.clientexistService.getClient(form.value['nom'], form.value['prénom'], form.value['datedenaissance'])['lieudenaissance'];
			this.clientService.adressepostale = this.clientexistService.getClient(form.value['nom'], form.value['prénom'], form.value['datedenaissance'])['adressepostale'];
			this.router.navigate(['/dossier-client', this.clientService.idclient(), this.entiteUtilisateurRouting]);
		}
	}
	isClientFound() {
		return this.clientexistService.doesClientExist(this.clientService.nom, this.clientService.prénom, this.clientService.datedenaissance);
	}


}
