import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Atributo } from '../interfaces/atributo';
import { map, tap } from 'rxjs/operators';

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

  getAtributosBy(parametro: string): Observable<Atributo[]> {
    switch (parametro) {
      case 'default': {
        return this.http.get<Atributo[]>('assets/data/data.json');
      }

      case 'nameAZ': {
        return this.http
          .get<Atributo[]>('assets/data/data.json')
          .pipe(
            tap((atributos) =>
              atributos.sort((a, b) => a.nombre.localeCompare(b.nombre))
            )
          );
      }

      case 'nameZA': {
        return this.http
          .get<Atributo[]>('assets/data/data.json')
          .pipe(
            tap((atributos) =>
              atributos.sort((a, b) => a.nombre.localeCompare(b.nombre) * -1)
            )
          );
      }

      case 'quantityMinor': {
        return this.http
          .get<Atributo[]>('assets/data/data.json')
          .pipe(
            tap((atributos) =>
              atributos.sort((a, b) => a.cantidad - b.cantidad)
            )
          );
      }

      case 'quantityMajor': {
        return this.http
          .get<Atributo[]>('assets/data/data.json')
          .pipe(
            tap((atributos) => {
              console.log(atributos);
              return atributos.sort((a, b) => a.cantidad - b.cantidad);
            })
          )
          .pipe(tap((atributos) => atributos.reverse()));
      }

      default: {
        return this.http.get<Atributo[]>('assets/data/data.json');
      }
    }
  }
}
