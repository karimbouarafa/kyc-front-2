import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-creation-certificat',
	templateUrl: './creation-certificat.component.html',
	styleUrls: ['./creation-certificat.component.css']
})
export class CreationCertificatComponent implements OnInit {

	@Input() idClient;


	constructor() { }

	ngOnInit() {


	}


}
