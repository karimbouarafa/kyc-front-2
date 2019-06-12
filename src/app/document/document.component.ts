import { Component, OnInit, Input } from '@angular/core';
import { DocumentsService } from '../services/document.service';

@Component({
	selector: 'app-document',
	templateUrl: './document.component.html',
	styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {

	//@Input() idclient: String;
	@Input() index: number;

	doc: string;
	date: string;
	statut: string;
	date2: string;


	constructor(private documentsservice: DocumentsService) { }

	ngOnInit() {
	}

	



}
