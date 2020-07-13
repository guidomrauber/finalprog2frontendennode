import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from '../models/mutante';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MutanteService {
  API_URI = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getGames() {
    return this.http.get(`${this.API_URI}`);
  }

  public paises(page: number, size: number, order: string, asc: boolean): Observable<any> {
    return this.http.get<any>(this.API_URI + `page=${page}&size=${size}&order=${order}&asc=${asc}`);
  }

  
}
