import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Atributo } from '../interfaces/atributo';

@Injectable({
  providedIn: 'root'
})
export class AtributoService {

  constructor(
    private http: HttpClient
  ) { }

  getAtributos(): Observable<Atributo[]> {
    return this.http.get<Atributo[]>('assets/data/data.json');
  }
}
