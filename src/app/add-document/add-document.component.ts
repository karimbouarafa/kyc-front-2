import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { DocumentsService } from '../services/document.service';

@Component({
	selector: 'app-add-document',
	templateUrl: './add-document.component.html',
	styleUrls: ['./add-document.component.css']
})
export class AddDocumentComponent implements OnInit {

	constructor(private clientService: ClientService, private router: Router, private documentService: DocumentsService) { }
	hasSubmittedForm: boolean;
	ngOnInit() {
		this.hasSubmittedForm = false;
	}
	selectedFiles: FileList;
	fileName: string;

	detectFiles(event) {
		this.selectedFiles = event.target.files;
		this.fileName = this.selectedFiles[0].name;
		console.log('selectedFiles: ' + this.fileName);
	}

	onSubmit(form: NgForm) {
		console.log('we the best');
		this.documentService.CreateDoc(form.value['nomdoc'], form.value['statut'], form.value['dateE'], this.fileName);
		console.log("le statut: " + form.value['statut'])
		console.log("what" + form.value['file']);
		this.hasSubmittedForm = true;
		this.documentService.mydocs.push
	}

	onOpening() {
		this.hasSubmittedForm = false;
	}
}
