import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ResponseG } from '../models/grafico';
import { Observable } from 'rxjs';
import { Game } from '../models/mutante';
@Injectable({
  providedIn: 'root'
})
export class GraficoService {
   API_URI = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }
  getGames(_body: Game): Observable<ResponseG> {
    return this.http.post<ResponseG>(`${this.API_URI}/stats`, _body);
  }
}
