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
	dataTargetDocument: string;
	modalIdDocument: string;
	statutDocument: string;
	idDocument: string;




	constructor() { }

	ngOnInit() {

		this.modalIdDocument= "myModalDocument".concat(this.index)
		this.dataTargetDocument = "#myModalDocument".concat(this.index)
		this.statutDocument= this.documentElement["status"]
		this.idDocument = this.documentElement["document"]

	}

}
