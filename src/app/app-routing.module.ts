import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjouterClientComponent } from './ajouter-client/ajouter-client.component';
import { DossierClientComponent } from './dossier-client/dossier-client.component';
import { RechercherClientComponent } from './rechercher-client/rechercher-client.component';

const routes: Routes = [
	{ path: 'nouveau-client', component: AjouterClientComponent },
	{ path: 'dossier-client', component: DossierClientComponent },
	{ path: 'rechercher-client', component: RechercherClientComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
