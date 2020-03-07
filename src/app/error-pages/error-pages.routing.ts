// Importar los modulos del router de angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importar los componentes a los cuales les quiero hacer una pagina exclusiva
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// Array de rutas
const appRoutes: Routes = [
  { path: '', component: PageNotFoundComponent }
];

// Exportar el modulo de rutas
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forChild(appRoutes);
