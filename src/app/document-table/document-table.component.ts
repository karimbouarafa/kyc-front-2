import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import {DocumentListEntiteService} from '../services/document-list-entite.service';
@Component({
	selector: 'app-document-table',
	templateUrl: './document-table.component.html',
	styleUrls: ['./document-table.component.css']
})
export class DocumentTableComponent implements OnInit {


	documentEntite: string[];
	columnsDocumentEntite: string[];
	constructor(private atService: DocumentListEntiteService) {}

ngOnInit() {
	this.columnsDocumentEntite = this.atService.getDocumentEntiteColumns();
	this.documentEntite = this.atService.getDocumentEntiteList();
	console.log("nomdocument:")
	console.log(this.documentEntite);

}

}
