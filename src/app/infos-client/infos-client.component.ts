import { Component, OnInit, Input } from '@angular/core';
import { ClientService } from '../services/client.service';

@Component({
	selector: 'app-infos-client',
	templateUrl: './infos-client.component.html',
	styleUrls: ['./infos-client.component.css']
})
export class InfosClientComponent implements OnInit {

	constructor(private clientService: ClientService) { }
	@Input() idClient: string;


	ngOnInit() {

	}

	nom() {
		return this.clientService.nom;
	}
	prenom() {
		return this.clientService.prénom;
	}
	datedenaissance() {
		return this.clientService.datedenaissance;
	}

}
