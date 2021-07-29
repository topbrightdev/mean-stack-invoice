import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , FormBuilder ,Validators} from '@angular/forms';
import { InvoiceService } from '../../invoice.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Invoice } from '../../models/invoice';
import { Login } from '../../models/login';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  private invoice:Invoice[]


  constructor(
       private fb: FormBuilder ,
       private invoiceService : InvoiceService ,
       private _snackBar: MatSnackBar,
       private router:Router,
       private route:ActivatedRoute

       ) { }

  ngOnInit(): void {

    this.createForm();
    this.setInvoiceToForm();
  }

  createForm(){

    this.loginForm = this.fb.group({ 
    
         
          username : ['' , Validators.required],
          password: ['', Validators.compose([Validators.required, Validators.minLength(8)])]
          
      })
    
     }
     

      onSubmit(){

        
       this.invoiceService.createInvoice(this.loginForm.value).subscribe(data=>{
        this._snackBar.open('Invoice Created' , 'Success' , {
            duration:2000
          })
        
         this.loginForm.reset();
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

     onCancel() {

      this.router.navigate(['dashboard' ,'invoices'])

     }

      setInvoiceToForm(){

        this.route.params.subscribe(params => {

          let id = params['id'];

          if(!id){
            return;
          }
          this.invoiceService.getInvoiceId(id)
          .subscribe(invoice => {
            debugger
             this.invoice = invoice;
             this.loginForm.patchValue(this.invoice);
            

          }, err => this.errorHandler(err , 'Failed to get invoice')
          )
        })
       
     }

     onLogin(){
       
       console.log(this.loginForm.value)
       this._snackBar.open('You have login successfully' , 'Success' , {
        duration:2000
      })

     }
   
  }


