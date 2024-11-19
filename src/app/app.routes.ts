import { Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { CommandeComponent } from './commande/commande.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { PanierComponent } from './panier/panier.component';

export const routes: Routes = [
{
    path : 'connexion',
    component : ConnexionComponent                                                                                                
},
{
   path : 'inscription',
   component : InscriptionComponent
},
{
   path : 'acceuil',
   component : AcceuilComponent                                                                                                 
},
{
    path : 'commande',
    component : CommandeComponent                                                                                                
},
{
    path : 'panier',
    component : PanierComponent
},

];
