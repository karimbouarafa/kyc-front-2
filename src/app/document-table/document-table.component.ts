import { Component, OnInit, Input } from '@angular/core';
import { DocumentListEntiteService } from '../services/document-list-entite.service';
@Component({
	selector: 'app-document-table',
	templateUrl: './document-table.component.html',
	styleUrls: ['./document-table.component.css']
})
export class DocumentTableComponent implements OnInit {

	@Input() entiteUtilisateur: string;
	@Input() idClient: string;
	documentEntite: string[];
	columnsDocumentEntite: string[];
	constructor(private atService: DocumentListEntiteService) { }

	ngOnInit() {
		this.columnsDocumentEntite = this.atService.getDocumentEntiteColumns();
		this.documentEntite = this.atService.getDocumentEntiteList()
	}


	}

