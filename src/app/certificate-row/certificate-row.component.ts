import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-certificate-row',
	templateUrl: './certificate-row.component.html',
	styleUrls: ['./certificate-row.component.css']
})
export class CertificateRowComponent implements OnInit {

	@Input() certificat: string;
	@Input() columnsCertificat: string[];

	constructor() { }

	ngOnInit() {
	}

}
