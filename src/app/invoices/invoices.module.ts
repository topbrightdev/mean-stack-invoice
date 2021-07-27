import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceListingComponent } from './components/invoice-listing/invoice-listing.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../angular-material/angular-material.module';
import { ClientsComponent } from './components/clients/clients.component';
import { HttpClientModule } from '@angular/common/http';
import { InvoiceService } from './invoice.service';



@NgModule({
  declarations: [
    InvoiceListingComponent,
    ClientsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    HttpClientModule
  ],
  exports:[
    InvoiceListingComponent,
    ClientsComponent
  ],
  providers:[InvoiceService]
})
export class InvoicesModule { }
