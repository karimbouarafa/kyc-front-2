import { Component, OnInit, Input } from '@angular/core';
import { DocumentsService } from '../services/document.service';

@Component({
  selector: 'app-otherdocument',
  templateUrl: './otherdocument.component.html',
  styleUrls: ['./otherdocument.component.css']
})
export class OtherdocumentComponent implements OnInit {

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
    console.log(this.documentsservice.notmydocs.length);
    return this.documentsservice.notmydocs[this.index]['nomDoc']; 
    
  }

  docdateA(){
    return this.documentsservice.notmydocs[this.index]['dateA']; 
  }

  docstatut(){
    return this.documentsservice.notmydocs[this.index]['status'];
  }

  docdateE(){
    return this.documentsservice.notmydocs[this.index]['dateE'];
  }
  initiator(){
    return this.documentsservice.notmydocs[this.index]['initiator'];
  }

  
  
}
