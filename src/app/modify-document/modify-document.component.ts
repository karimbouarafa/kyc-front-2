import { Component, OnInit, Input } from '@angular/core';
import { StringifyOptions } from 'querystring';

@Component({
	selector: 'app-modify-document',
	templateUrl: './modify-document.component.html',
	styleUrls: ['./modify-document.component.css']
})
export class ModifyDocumentComponent implements OnInit {
	@Input() index: string;
	@Input() documentElement: string;
	@Input() entiteUtilisateur: string;
	dataTargetDocument: string;
	modalIdDocument: string;
	statutDocument: string;
	idDocument: string;
	initiateurDocument: string;
	




	constructor() { }

	ngOnInit() {

		this.modalIdDocument= "myModalDocument".concat(this.index)
		this.dataTargetDocument = "#myModalDocument".concat(this.index)
		this.statutDocument= this.documentElement["status"]
		this.idDocument = this.documentElement["document"]
		this.initiateurDocument =this.documentElement["initiator"]

	}
	isEntiteSameAsUser() {
		// console.log("initiateurDoc: ".concat(this.initiateurDocument))
		// console.log("entiteUser: ".concat(this.entiteUtilisateur))
		if (this.entiteUtilisateur == this.initiateurDocument) {
			// console.log("meme entite")
			return true
		} else {
			// console.log("pas la meme entite")
			return false
		}

}}
