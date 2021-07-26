import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"invoice-builder",
    loadChildren:() =>import('./invoice/invoice.module')
    .then(m=>m.InvoiceModule)
  },
  {
    path:'**',
    redirectTo:"invoice-builder"
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
