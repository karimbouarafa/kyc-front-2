import { Component, OnInit, Input } from '@angular/core';
import { DocumentsService } from '../services/document.service';
import { Docu } from '../models/document.model';


@Component({
	selector: 'app-display-documents',
	templateUrl: './display-documents.component.html',
	styleUrls: ['./display-documents.component.css']
})
export class DisplayDocumentsComponent implements OnInit {


	docs: Docu[] = [];

	@Input() index: number;

	doc: string;
	date: string;
	statut: string;
	date2: string;

	constructor(private documentsservice: DocumentsService) {
		// this.docs = this.documentsservice.documents;

		this.docs = this.documentsservice.mydocs;

	}

	ngOnInit() {

	}
	docname() {
		console.log(this.documentsservice.mydocs.length);
		return this.documentsservice.mydocs[this.index]['nomDoc'];

	}

	docdateA() {
		return this.documentsservice.mydocs[this.index]['dateA'];
	}

	docstatut() {
		return this.documentsservice.mydocs[this.index]['status'];
	}

	docdateE() {
		return this.documentsservice.mydocs[this.index]['dateE'];
	}




}
