import { Component, OnInit, Input } from '@angular/core';
import { DocumentListEntiteService } from '../services/document-list-entite.service';
import { Docu } from '../models/document.model';
@Component({
	selector: 'app-document-table',
	templateUrl: './document-table.component.html',
	styleUrls: ['./document-table.component.css']
})
export class DocumentTableComponent implements OnInit {

	@Input() entiteUtilisateur: string;
	@Input() idClient: string;
	documents: Docu[];
	documentsEntite;
	documentsAutreEntite;
	constructor(private atService: DocumentListEntiteService) { }

	ngOnInit() {
	//	this.documents = this.atService.getDocumentEntiteList();
		this.documents = this.atService.getDocumentEntiteListClient();
		console.log('doc2:'+this.atService.getDocumentEntiteList());
		this.documentsEntite = this.documents.filter(d => { return d["initiator"] === this.entiteUtilisateur })
		this.documentsAutreEntite = this.documents.filter(d => { return d["initiator"] !== this.entiteUtilisateur })
		console.log("documents autres entités: ")
		console.log(this.documentsEntite)
	}

	
}


