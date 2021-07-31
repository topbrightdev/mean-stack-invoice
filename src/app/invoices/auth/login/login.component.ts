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

  email:string;
  password:string

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
  }

  createForm(){

    this.loginForm = this.fb.group({ 
    
         
          email : ['' , Validators.required],
          password: ['', Validators.required]
          
      })
    
     }
     


     onReset(){

      this.loginForm.reset();

     }

      onSubmit(){

        
       this.invoiceService.loginUser(this.loginForm.value).subscribe(data=>{
        this._snackBar.open('User Login successfully' , 'Success' , {
            duration:2000
          })
        
         this.loginForm.reset();
         this.router.navigate(['dashboard' ,'invoices'])
         console.log(data);
       },
       err => this.errorHandler(err , 'Failed to Login')
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

     onLoginSubmit(){

      const user = {
        email: this.email,
        password: this.password
      }
      console.log(user);
      this.invoiceService.loginUser(user).subscribe(data => {
        if(data['success']) {
         this.invoiceService.storeUserData(data['token'], data['user']);
          // this.flashMessage.show('You are now logged in', {cssClass: 'alert-success', timeout: 5000});
          this._snackBar.open('User Login successfully' , 'Success' , {
            duration:2000
          })
          this.router.navigate(['dashboard' ,'invoices']);
        } else {
          // this.flashMessage.show(data['msg'], {cssClass: 'alert-danger', timeout: 5000});
          this.router.navigate(['login']);
        }
    },  err => this.errorHandler(err , 'Failed to Login')
    );
  
    }
  

     
   
  }


