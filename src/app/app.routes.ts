import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', loadChildren: ()=> import('./league/league-routing.module').then(m => m.LeagueRoutingModule)}
];
