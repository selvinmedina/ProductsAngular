// Importar los modulos del router de angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importar los componentes a los cuales les quiero hacer una pagina exclusiva
import { ProductComponent } from './components/product/product.component';

// Array de rutas
const appRoutes: Routes = [
  { path: 'product', component: ProductComponent },
];

// Exportar el modulo de rutas
export const productRoutingProviders: any[] = [];
export const productRouting: ModuleWithProviders = RouterModule.forChild(appRoutes);
