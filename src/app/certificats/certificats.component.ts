import { CertificateListService } from './../services/certificate-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-certificats',
	templateUrl: './certificats.component.html',
	styleUrls: ['./certificats.component.css']
})
export class CertificatsComponent implements OnInit {

	constructor(private atService: CertificateListService) { }
	certificats: string[];
	columnsCertificat: string[];
	ngOnInit() {
		this.columnsCertificat = this.atService.getCertificateColumns();
		this.certificats = this.atService.getCertificateList();
		console.log("certificats du client data:")
		console.log(this.certificats);
	}

}
