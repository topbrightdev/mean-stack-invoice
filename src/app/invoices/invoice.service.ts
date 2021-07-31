//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient ,HttpHeaders ,HttpParams}   from '@angular/common/http'

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

  authToken: any;
  user: any;
  results: any;

 
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

  createUser(user:Register):Observable<Register[]>{

    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json'); 
    
    return this.http.post<Register[]>(`${BASE_URL}/register` , user ,{headers: headers});

  }

  loginUser(user:Login):Observable<Login[]>{
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<Login[]>(`${BASE_URL}/login` , user ,{headers: headers});

  }

  storeUserData(token, user:Login) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  deleteInvoice(id:string):Observable<Invoice[]>{
    
    return this.http.delete<Invoice[]>(`${BASE_URL}/invoice/${id}`);

  }

  updateInvoice(id:string ,body:Invoice):Observable<Invoice[]>{
    
    return this.http.put<Invoice[]>(`${BASE_URL}/invoice/${id}` ,body);

  }
}
