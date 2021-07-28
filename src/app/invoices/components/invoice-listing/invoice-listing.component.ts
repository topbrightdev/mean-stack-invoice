import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { InvoiceService } from '../../invoice.service'
import { Invoice } from '../../models/invoice';
import { remove } from 'lodash';

@Component({
  selector: 'app-invoice-listing',
  templateUrl: './invoice-listing.component.html',
  styleUrls: ['./invoice-listing.component.scss']
})
export class InvoiceListingComponent implements OnInit {

  displayedColumns: string[] = ['item', 'date', 'due', 'qty' ,'rate' ,'tax','action'];
  dataSource : Invoice[] =[];

  constructor(private invoiceService:InvoiceService ,
     private router:Router , private _snackBar: MatSnackBar) { }

  ngOnInit(): void {

    this.onList();

  }

  onList(){
    this.invoiceService.getInvoice().subscribe(data=>{
      
      this.dataSource=data;
      this._snackBar.open('Invoice Loaded' , 'Success' , {
        duration:2000
      })
      console.log(data)
    }, err=>{
      this.errorHandler(err , 'Failed to Load invoice')
    }
    )
  }

  saveBtnHandler(){

    this.router.navigate(['dashboard' ,'invoices' ,'new'])

  }

  editBtnHandler(id){
    
    
     this.router.navigate(['dashboard' ,'invoices' ,id])

  }

  deleteBtnHandler(id){

    this.invoiceService.deleteInvoice(id)
    .subscribe(data=>{

    //  remove(this.dataSource,(item) => {
    //       return item._id === data._id
    //  })

      this._snackBar.open('Invoice Deleted' , 'Success' , {
        duration:2000
      })
      console.log(data)
    }, err => {
      this.errorHandler(err , 'Failed to Delete invoice')
    })
  }


  private errorHandler(error ,message ){
    console.log(error);
    this._snackBar.open(message , 'Error' , {
      duration:2000
    })
  }

}
