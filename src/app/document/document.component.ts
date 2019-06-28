import { Component, OnInit, Input } from '@angular/core';
import { DocumentsService } from '../services/document.service';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {

  //@Input() idclient: String;
  @Input() index: number;

  doc: string;
  date: string;
  statut: string;
  date2: string;


  constructor(private documentsservice: DocumentsService) { }

  ngOnInit() {
  }

  docname(){
    console.log(this.documentsservice.mydocs.length);
    return this.documentsservice.mydocs[this.index]['nomDoc']; 
    
  }

  docdateA(){
    return this.documentsservice.mydocs[this.index]['dateA']; 
  }

  docstatut(){
    return this.documentsservice.mydocs[this.index]['status'];
  }

  docdateE(){
    return this.documentsservice.mydocs[this.index]['dateE'];
  }

 

  
  
}
