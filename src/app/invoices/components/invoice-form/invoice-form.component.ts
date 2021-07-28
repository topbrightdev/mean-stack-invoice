import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , FormBuilder ,Validators} from '@angular/forms';
import { InvoiceService } from '../../invoice.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.scss']
})
export class InvoiceFormComponent implements OnInit {

  invoiceForm:FormGroup;


  constructor(
       private fb: FormBuilder ,
       private invoiceService : InvoiceService ,
       private _snackBar: MatSnackBar,
       private router:Router,

       ) { }

  ngOnInit(): void {

    this.createForm();
  }

  createForm(){

    this.invoiceForm = this.fb.group({ 
    
          item :['' , Validators.required],
          date: ['' , Validators.required],
          due : ['' , Validators.required],
          qty : ['' , Validators.required],
          rate: '',
          tax : ''
      })
    
     }

     onSubmit(){
       this.invoiceService.createInvoice(this.invoiceForm.value).subscribe(data=>{
        this._snackBar.open('Invoice Created' , 'Success' , {
            duration:2000
          })
        
         this.invoiceForm.reset();
         this.router.navigate(['dashboard' ,'invoices'])
         console.log(data);
       },
       err => this.errorHandler(err , 'Failed to create invoice')
       )
     }

     private errorHandler(error ,message ){
       console.log(error);
       this._snackBar.open(message , 'Error' , {
         duration:2000
       })
     }
   
  }


