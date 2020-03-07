// Importar los modulos del router de angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importar los componentes a los cuales les quiero hacer una pagina exclusiva
import { HomeComponent } from './components/home/home.component';

// Array de rutas
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: '**', component: HomeComponent }
];

// Exportar el modulo de rutas
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
