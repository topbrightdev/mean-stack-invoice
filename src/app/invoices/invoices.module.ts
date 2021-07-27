import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceListingComponent } from './components/invoice-listing/invoice-listing.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../angular-material/angular-material.module';
import { ClientsComponent } from './components/clients/clients.component';
import { HttpClientModule } from '@angular/common/http';
import { InvoiceService } from './invoice.service';
import { InvoiceFormComponent } from './components/invoice-form/invoice-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InvoiceListingComponent,
    ClientsComponent,
    InvoiceFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports:[
    InvoiceListingComponent,
    ClientsComponent,
    InvoiceFormComponent
  ],
  providers:[InvoiceService]
})
export class InvoicesModule { }
