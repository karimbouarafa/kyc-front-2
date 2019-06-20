import { UserCredentialsService } from './../services/user-credentials.service';
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
	constructor(private route: ActivatedRoute, private userCredentialService: UserCredentialsService) { }

	ngOnInit() {
		this.route.params.subscribe((params: Params) => this.idClient = params['idclient']);
		this.entiteUtilisateur=this.userCredentialService.getEntiteUser()
		console.log("entite user: ".concat(this.entiteUtilisateur))
	}

}
