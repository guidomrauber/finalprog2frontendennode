import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from '../models/mutante';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MutanteService {
  API_URI = 'http://localhost:3000/cd';
  constructor(private http: HttpClient) { }

  getGames() {
    return this.http.get(`${this.API_URI}/LISTADO`);
  }

  getGame(id: string) {
    return this.http.get(`${this.API_URI}/LISTADO/${id}`);
  }

  deleteGame(id: string) {
    return this.http.delete(`${this.API_URI}/LISTADO/${id}`);
  }

  saveGame(game: Game) {
    return this.http.post(`${this.API_URI}/LISTADO`, game);
  }

  updateGame(id: string|number, updatedGame: Game): Observable<Game> {
    return this.http.put(`${this.API_URI}/games/${id}`, updatedGame);
  }
}
