import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from '../models/mutante';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MutanteService {
  API_URI = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }

  getGames() {
    return this.http.get(`${this.API_URI}/mutante`);
  }

  

  
}
