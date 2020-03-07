import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { appRoutingProviders, routing } from './error-pages.routing';

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [
    CommonModule,
    routing
  ],
  providers: [appRoutingProviders]
})
export class ErrorPagesModule { }
