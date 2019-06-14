import { DOCUMENTLIST } from './../mock-data';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

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
