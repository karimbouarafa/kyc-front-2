import { DOCUMENTLIST } from './../mock-data';
import { Injectable } from '@angular/core';


@Injectable({
	providedIn: 'root'
})

export class DocumentListEntiteService {

	constructor() { }

	getDocumentEntiteColumns(): string[] {
		return ["nomDoc", "dateA", "status", "dateE"];
	}

	getDocumentEntiteList():  string[] {
		return DOCUMENTLIST;
	}
}
