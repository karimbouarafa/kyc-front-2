import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { InfosClientComponent } from './infos-client/infos-client.component';
import { DisplayDocumentsComponent } from './display-documents/display-documents.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CertificatsComponent } from './certificats/certificats.component';
import { CreationCertificatComponent } from './creation-certificat/creation-certificat.component';
import { DisplayDocumentsAutresEntitesComponent } from './display-documents-autres-entites/display-documents-autres-entites.component';
import { AddDocumentComponent } from './add-document/add-document.component';
import { ModifyDocumentComponent } from './modify-document/modify-document.component';
import { DossierClientComponent } from './dossier-client/dossier-client.component';
import { AjouterClientComponent } from './ajouter-client/ajouter-client.component';
import { RechercherClientComponent } from './rechercher-client/rechercher-client.component';
import { AccesPageComponent } from './acces-page/acces-page.component';
import { ConsulterCertificatComponent } from './consulter-certificat/consulter-certificat.component';
import { DocumentComponent } from './document/document.component';
import { FormsModule } from '@angular/forms';
import { OtherdocumentComponent } from './otherdocument/otherdocument.component';
import { DocumentTableComponent } from './document-table/document-table.component';
import { CertificateRowComponent } from './certificate-row/certificate-row.component';
import { NotificationsComponent } from './notifications/notifications.component';


@NgModule({
  declarations: [
    AppComponent,
    InfosClientComponent,
    DisplayDocumentsComponent,
    NavbarComponent,
    CertificatsComponent,
    CreationCertificatComponent,
    DisplayDocumentsAutresEntitesComponent,
    AddDocumentComponent,
    ModifyDocumentComponent,
    DossierClientComponent,
    AjouterClientComponent,
    RechercherClientComponent,
    AccesPageComponent,
    ConsulterCertificatComponent,
    DocumentComponent,
        OtherdocumentComponent,
        DocumentTableComponent,
        CertificateRowComponent,
        NotificationsComponent,
 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
