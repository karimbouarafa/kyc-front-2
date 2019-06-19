import { CertificateListService } from './../services/certificate-list.service';
import { Component, OnInit, Input } from '@angular/core';
import { Certificat } from '../models/certificat.model';

@Component({
	selector: 'app-certificats',
	templateUrl: './certificats.component.html',
	styleUrls: ['./certificats.component.css']
})
export class CertificatsComponent implements OnInit {

	constructor(private atService: CertificateListService) { }
	@Input() entiteUtilisateur: string;
	@Input() idClient: string;
	certificats: Certificat[];
	columnsCertificat: string[];
	ngOnInit() {
		this.columnsCertificat = this.atService.getCertificateColumns();
		this.certificats = this.atService.getCertificateList();

	}

}
