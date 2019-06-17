import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-modify-document',
	templateUrl: './modify-document.component.html',
	styleUrls: ['./modify-document.component.css']
})
export class ModifyDocumentComponent implements OnInit {
	@Input() statutDocument: string;
	@Input() dateValidite: string;
	constructor() { }

	ngOnInit() {
	}

}
