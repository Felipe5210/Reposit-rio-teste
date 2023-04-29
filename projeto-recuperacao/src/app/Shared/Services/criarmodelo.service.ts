import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CriarmodeloService {


  constructor(private http: HttpClient) {}

  saveData(data: any): Observable<any> {
    return this.http.post('http://localhost:3000/criarmodelo', data);
  }

  getDatas(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/criarmodelo');
  }

  getDataById(id: any): Observable<any> {
    return this.http.get('http://localhost:3000/criarmodelo/' + id);
  }

  updateDataById(id: number, data: any): Observable<any> {
    return this.http.put('http://localhost:3000/criarmodelo/' + id, data);
  }

  deleteDataById(id: number): Observable<any> {
    return this.http.delete('http://localhost:3000/criarmodelo/' + id);
  }
}
