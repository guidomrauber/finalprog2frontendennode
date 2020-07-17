import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import { comprobador} from '../models/comprobador';
import { ResponseG } from '../models/resultado';
import { Game } from '../models/mutante';
@Injectable({
  providedIn: 'root'
})
export class AgregarService {
private url: string = "http://localhost:3000/api/agregar";
  private ArrayG: Array<ResponseG>;
  constructor(private http: HttpClient) { }
  postRespuesta(_body: Game): Observable<ResponseG> {

    return this.http.post<ResponseG>(this.url, _body);
  }
}
