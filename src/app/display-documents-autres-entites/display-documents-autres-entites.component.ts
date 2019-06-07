import { Component, OnInit } from '@angular/core';
import { DocumentsService } from '../services/document.service';
import { Docu } from '../models/document.model';

@Component({
  selector: 'app-display-documents-autres-entites',
  templateUrl: './display-documents-autres-entites.component.html',
  styleUrls: ['./display-documents-autres-entites.component.css']
})
export class DisplayDocumentsAutresEntitesComponent  implements OnInit {
  
  
  docs: Docu[] = [];
  constructor(private documentsservice: DocumentsService) {
    

    this.docs = this.documentsservice.notmydocs;
    
   }

  ngOnInit() {
    
  }

 
 


}
