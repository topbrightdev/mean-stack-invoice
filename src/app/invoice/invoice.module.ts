import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceRoutingModule } from './invoice-routing.module';
import { InvoiceComponent } from './invoice/invoice.component';
import { MainContentComponent } from './main-content/main-content.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MaterialModule } from '../angular-material/angular-material.module';


@NgModule({
  declarations: [
    InvoiceComponent,
    MainContentComponent,
    SidebarComponent,
    ToolbarComponent,
  ],
  imports: [
    CommonModule,
    InvoiceRoutingModule,
    MaterialModule,
    
    
  ],
  exports: [
    InvoiceComponent,
    MainContentComponent,
    SidebarComponent,
    ToolbarComponent,
  ]
  
})
export class InvoiceModule { }
