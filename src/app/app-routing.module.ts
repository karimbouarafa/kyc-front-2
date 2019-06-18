import { AccesPageComponent } from './acces-page/acces-page.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjouterClientComponent } from './ajouter-client/ajouter-client.component';
import { DossierClientComponent } from './dossier-client/dossier-client.component';
import { RechercherClientComponent } from './rechercher-client/rechercher-client.component';
import { DocumentComponent } from './document/document.component';


const routes: Routes = [
	{ path: 'nouveau-client', component: AjouterClientComponent },
	{ path: 'dossier-client/:idclient/:entite', component: DossierClientComponent },
	{ path: 'rechercher-client', component: RechercherClientComponent },
	{ path: 'document', component: DocumentComponent },
	{ path: 'notifications', component: NotificationsComponent},
	{ path: '', component: AccesPageComponent }


];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
