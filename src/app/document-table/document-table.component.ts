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
	documents: string[];
	documentsEntite: string[];
	documentsAutreEntite: string[];
	constructor(private atService: DocumentListEntiteService) { }

	ngOnInit() {
		this.documents = this.atService.getDocumentEntiteList()
		this.documentsEntite = this.documents.filter(this.isEntiteSameAsUser)
		this.documentsAutreEntite = this.documents.filter(this.isEntiteNotSameAsUser)
		console.log(this.documentsAutreEntite)
	}

	isEntiteSameAsUser(d) {
		return d["initiator"]==this.entiteUtilisateur
	}
	isEntiteNotSameAsUser(d) {
		return d["initiator"] != this.entiteUtilisateur
	}
}


