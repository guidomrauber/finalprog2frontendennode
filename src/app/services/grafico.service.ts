import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Game } from '../models/mutante';
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class GraficoService {
   API_URI = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }
  getGames() {
    return this.http.get(`${this.API_URI}/stats`)
    .map(res => res);
  }
}
