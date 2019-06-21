import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { DocumentsService } from '../services/document.service';

@Component({
  selector: 'app-add-document',
  templateUrl: './add-document.component.html',
  styleUrls: ['./add-document.component.css']
})
export class AddDocumentComponent implements OnInit {

  constructor(private clientService: ClientService, private router: Router, private documentService: DocumentsService) { }

  ngOnInit() {
  }


  onSubmit(form: NgForm) {
console.log('we the best');
    this.documentService.CreateDoc( form.value['nomdoc'] , form.value['statut'] , form.value['dateE'], form.value['file']);
    console.log("what"+form.value['file']);
    
    this.documentService.mydocs.push
    
    
}
}
