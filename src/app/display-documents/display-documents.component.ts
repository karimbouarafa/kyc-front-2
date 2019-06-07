import { Component, OnInit } from '@angular/core';
import { DocumentsService } from '../services/document.service';
import { Docu } from '../models/document.model';


@Component({
  selector: 'app-display-documents',
  templateUrl: './display-documents.component.html',
  styleUrls: ['./display-documents.component.css']
})
export class DisplayDocumentsComponent implements OnInit {
  
  
  docs: Docu[] = [];
  constructor(private documentsservice: DocumentsService) {
   // this.docs = this.documentsservice.documents;
    
    this.docs = this.documentsservice.mydocs;
    
   }

  ngOnInit() {
    
  }

 
 


}
