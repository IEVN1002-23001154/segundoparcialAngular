import { Routes } from '@angular/router';
import { Zodiaco } from './zodiaco/zodiaco';
import { Usuario } from './usuario/usuario';

export const routes: Routes = [
  { path: '', redirectTo: 'zodiaco', pathMatch: 'full' },
  { path: 'zodiaco', component: Zodiaco },
  { path: 'usuario', component: Usuario },
];
