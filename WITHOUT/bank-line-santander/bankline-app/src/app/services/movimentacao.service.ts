import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



const baseUrl = 'http://localhost:8081';

@Injectable({
  providedIn: 'root'
})
export class MovimentacaoService {

  constructor(private http: HttpClient) { }
  
  list(): Observable<any> {
    return this.http.get(`${baseUrl}/movimentacao/findall`);
  }

  create(movimentacao:any): Observable<any> {

    // var json = JSON.stringify({movimentacao});
    //             var params = 'json=' + json;
    //             var cabe = new Headers();
    //             cabe.append('Content-Type', 'application/x-www-form-urlencoded');


    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
        'body':JSON.stringify({movimentacao})
      })
    };


    return this.http.post(`${baseUrl}/movimentacao`,httpOptions);
 }
}
