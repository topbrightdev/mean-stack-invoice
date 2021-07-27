import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../invoice.service'


@Component({
  selector: 'app-invoice-listing',
  templateUrl: './invoice-listing.component.html',
  styleUrls: ['./invoice-listing.component.scss']
})
export class InvoiceListingComponent implements OnInit {

  constructor(private invoiceService:InvoiceService) { }

  ngOnInit(): void {

    this.onList();

  }

  onList(){
    this.invoiceService.getInvoice().subscribe(data=>{
      console.log(data)
    })
  }

}
