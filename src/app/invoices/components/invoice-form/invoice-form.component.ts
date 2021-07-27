import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.scss']
})
export class InvoiceFormComponent implements OnInit {

  invoiceForm:FormGroup;


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.createForm();
  }

  createForm(){

    this.invoiceForm = this.fb.group({ 
    
          item : new FormControl(),
          date: new FormControl(),
          due : new FormControl(),
          qty : new FormControl(),
          rate: new FormControl(),
          tax : new FormControl()
      })
    
     }
   
  }


