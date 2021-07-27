import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from '../invoices/components/clients/clients.component';
import { InvoiceListingComponent } from '../invoices/components/invoice-listing/invoice-listing.component';
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
      },
      {
        path:'invoices',
        component:InvoiceListingComponent
      },
      {
        path:'clients',
        component:ClientsComponent
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
