import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//import { Observable } from 'rxjs/internal/Observable';
//import {Observable } from 'rxjs/Observable';
import { Invoice } from './models/invoice'


const BASE_URL ='http://localhost:5000/api'

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
 
  constructor(private http:HttpClient) { }



  getInvoice():Observable<Invoice[]>{
    
    return this.http.get<Invoice[]>(`${BASE_URL}/invoice`);

  }

  createInvoice(body:Invoice):Observable<Invoice[]>{
    
    return this.http.post<Invoice[]>(`${BASE_URL}/invoice` , body);

  }
}
