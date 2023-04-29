import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CriarColecaoService {

  constructor(private http: HttpClient) {}

  saveData(data: any): Observable<any> {
    return this.http.post('http://localhost:3000/criarcolecao', data);
  }

  getDatas(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/criarcolecao');
  }

  getDataById(id: any): Observable<any> {
    return this.http.get('http://localhost:3000/criarcolecao/' + id);
  }

  updateDataById(id: number, data: any): Observable<any> {
    return this.http.put('http://localhost:3000/criarcolecao/' + id, data);
  }

  deleteDataById(id: number): Observable<any> {
    return this.http.delete('http://localhost:3000/criarcolecao/' + id);
  }

}
