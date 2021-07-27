import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InvoiceService } from '../../invoice.service'
import { Invoice } from '../../models/invoice';


@Component({
  selector: 'app-invoice-listing',
  templateUrl: './invoice-listing.component.html',
  styleUrls: ['./invoice-listing.component.scss']
})
export class InvoiceListingComponent implements OnInit {

  displayedColumns: string[] = ['item', 'date', 'due', 'qty' ,'rate' ,'tax','action'];
  dataSource : Invoice[] =[];

  constructor(private invoiceService:InvoiceService ,
     private router:Router) { }

  ngOnInit(): void {

    this.onList();

  }

  onList(){
    this.invoiceService.getInvoice().subscribe(data=>{
      
      this.dataSource=data;
      console.log(data)
    })
  }

  saveBtnHandler(){

    this.router.navigate(['dashboard' ,'invoices' ,'new'])

  }

}
