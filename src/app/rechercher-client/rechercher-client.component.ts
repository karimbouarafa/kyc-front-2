import { Component, OnInit } from '@angular/core';
import { NgForm } from '../../../node_modules/@angular/forms';
import { ClientService } from '../services/client.service';
import { Router } from '../../../node_modules/@angular/router';


@Component({
	selector: 'app-rechercher-client',
	templateUrl: './rechercher-client.component.html',
	styleUrls: ['./rechercher-client.component.css']
})
export class RechercherClientComponent implements OnInit {

	constructor(private clientService: ClientService, private router: Router) { }

	ngOnInit() {
	}


	onSubmit(form: NgForm) {
		console.log('recherche client...');
		this.clientService.nom = form.value['nom'];
		this.clientService.prénom = form.value['prénom'];
		this.clientService.datedenaissance = form.value['datedenaissance'];
		console.log(this.clientService.idclient());
		if (this.clientService.isClientInDatabase() == true) {
			this.router.navigate(['/dossier-client']);
		}
		else {
			this.router.navigate(['/nouveau-client']);
		}

	}
}
