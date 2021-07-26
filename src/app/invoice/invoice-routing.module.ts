import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceComponent } from './invoice/invoice.component';
import { MainContentComponent } from './main-content/main-content.component';

const routes: Routes = [
  {
    path:'',
    component:InvoiceComponent,
    children: [
      {
        path:'',
        component:MainContentComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceRoutingModule { }
