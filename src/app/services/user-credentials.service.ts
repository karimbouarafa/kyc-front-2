import { ENTITEUTILISATEUR } from './../mock-data';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class UserCredentialsService {

	constructor() { }

	getEntiteUser() {
		return ENTITEUTILISATEUR
	}
}
