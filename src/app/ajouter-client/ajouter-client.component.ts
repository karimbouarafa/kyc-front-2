import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Client } from '../models/client.model';
import { ClientexistService } from '../services/clientexist.service';
import { Router } from '@angular/router';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-ajouter-client',
  templateUrl: './ajouter-client.component.html',
  styleUrls: ['./ajouter-client.component.css']
})
export class AjouterClientComponent implements OnInit {


  myClient: Client;
  constructor(private clientexistService: ClientexistService, private router: Router, private clientService: ClientService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
   // this.myClient = form.value['client'],

    console.log(form.value['civilité']); 
    console.log(form.value['nom']); 
    console.log(form.value['prénom']); 

    const H = new Client(form.value['civilité'], form.value['nom'], form.value['prénom'], 
    form.value['datedenaissance'], form.value['lieudenaissance'], form.value['adressepostale']);
    console.log(H);
    console.log(this.clientexistService.historic);
    this.clientexistService.AddHistoric(H);
    this.clientexistService.saveHistoricToServer();
      this.clientService.nom = form.value['nom'];
			this.clientService.prénom = form.value['prénom'];
      this.clientService.datedenaissance = form.value['datedenaissance'];
      this.clientService.civilité = form.value['civilité'];
			this.clientService.lieudenaissance = form.value['lieudenaissance']
			this.clientService.adressepostale = form.value['adressepostale'];


    this.router.navigate(['/dossier-client']);
    
      
        
  }      

}
