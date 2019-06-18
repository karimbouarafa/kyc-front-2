import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
	selector: 'app-dossier-client',
	templateUrl: './dossier-client.component.html',
	styleUrls: ['./dossier-client.component.css']
})
export class DossierClientComponent implements OnInit {
	idClient: string;
	entiteUtilisateur: string;
	constructor(private route: ActivatedRoute) { }

	ngOnInit() {
		this.route.params.subscribe((params: Params) => this.idClient = params['idclient']);
		this.route.params.subscribe((params: Params) => this.entiteUtilisateur = params['entite']);
	}

}
