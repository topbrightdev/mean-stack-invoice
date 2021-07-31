import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//import { Observable } from 'rxjs/internal/Observable';
//import {Observable } from 'rxjs/Observable';
import { Invoice } from './models/invoice'
import { Login } from './models/login';
import { Register } from './models/register';

const BASE_URL ='http://localhost:5000/api'

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
 
  constructor(private http:HttpClient) { }



  getInvoice():Observable<Invoice[]>{
    
    return this.http.get<Invoice[]>(`${BASE_URL}/invoice`);

  }


  getInvoiceId(id:string):Observable<Invoice[]>{
    
    return this.http.get<Invoice[]>(`${BASE_URL}/invoice/${id}`);

  }

  createInvoice(body:Invoice):Observable<Invoice[]>{
    
    return this.http.post<Invoice[]>(`${BASE_URL}/invoice` , body);

  }

  createUser(body:Login):Observable<Login[]>{
    
    return this.http.post<Login[]>(`${BASE_URL}/login` , body);

  }

  loginUser(body:Register):Observable<Register[]>{
    
    return this.http.post<Register[]>(`${BASE_URL}/register` , body);

  }

  deleteInvoice(id:string):Observable<Invoice[]>{
    
    return this.http.delete<Invoice[]>(`${BASE_URL}/invoice/${id}`);

  }

  updateInvoice(id:string ,body:Invoice):Observable<Invoice[]>{
    
    return this.http.put<Invoice[]>(`${BASE_URL}/invoice/${id}` ,body);

  }
}
