import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { InvoiceComponent } from './invoice/invoice.component';
import { MainContentComponent } from './main-content/main-content.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MaterialModule } from '../angular-material/angular-material.module';
import { InvoicesModule } from '../invoices/invoices.module';


@NgModule({
  declarations: [
    InvoiceComponent,
    SidebarComponent,
    ToolbarComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    InvoicesModule
    
    
  ],
  exports: [
    InvoiceComponent,
    SidebarComponent,
    ToolbarComponent,
  ]
  
})
export class DashboardModule { }
