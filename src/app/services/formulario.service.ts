import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {ResponseG} from '../Model/responseG';
import { Game } from '../models/mutante';
import { TextEnvio } from '../Model/peticionEnvio';
@Injectable({
  providedIn: 'root'
})
export class FormularioService {
private url: string = "http://localhost:3000/api";
  private url2: string = "http://localhost:3000/api/agregar";
  private ArrayG: Array<ResponseG>;
  constructor( private http: HttpClient) { }

  postRespuesta(_body: TextEnvio): Observable<ResponseG> {

    return this.http.post<ResponseG>(this.url, _body);
  }
  postRespuesta2(_body: Game): Observable<ResponseG> {

    return this.http.post<ResponseG>(this.url2, _body);
  }
  
  

}