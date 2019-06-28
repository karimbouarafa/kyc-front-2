import { Component, OnInit, Input } from '@angular/core';
import { ClientService } from '../services/client.service';
import { DocumentsService } from '../services/document.service';
import { DocumentListEntiteService } from '../services/document-list-entite.service';
import { NgForm } from '@angular/forms';
import { CertificatService } from '../services/certificat.service';

@Component({
	selector: 'app-creation-certificat',
	templateUrl: './creation-certificat.component.html',
	styleUrls: ['./creation-certificat.component.css']
})
export class CreationCertificatComponent implements OnInit {

	@Input() idClient;
	documentsname: String[];

	constructor(private documentsListEntiteService: DocumentListEntiteService,
		private certificatService: CertificatService) {
		this.documentsname = this.documentsListEntiteService.documentsName;
	}
	hasSubmittedForm: boolean;

	ngOnInit() {
		this.hasSubmittedForm = false;
	}

	onSubmit(form: NgForm) {

		this.certificatService.CreateCertificate(form.value['profil'], form.value['dateE'], form.value['com'])
		this.hasSubmittedForm = true;
		console.log(form);

	}

	onOpening() {
		this.hasSubmittedForm = false;
	}
	viderFormulaire(form: NgForm) {
		form.reset()
		console.log(form)
	}

}
