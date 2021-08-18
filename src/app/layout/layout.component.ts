import { Atributo } from './../shared/interfaces/atributo';
import { AtributoService } from './../shared/services/atributo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  atributos: Atributo[] = [];
  currentOrden: any;

  ordenes: any = [
    { nombre: 'Por defecto', value: 'default'},
    { nombre: 'Por nombre', value: 'name'},
    { nombre: 'Por cantidad', value: 'quantity'}
  ];

  constructor(
    private atributo: AtributoService
  ) {}

  ngOnInit(): void {
    this.currentOrden = this.ordenes[0].value;
    
    this.obtenerAtributosOrdenadosPor(this.currentOrden);
  }

  public obtenerAtributosOrdenadosPor(parametro: string) {
    console.log(parametro);
    this.atributo.getAtributosBy(parametro).subscribe(atributos => {
      this.atributos = atributos;
    });
  }

  public determinarColor(n: number): string {
    if (n == 0) {
      return 'bg-danger';
    } else if (n < 20) {
      return 'bg-warning';
    } else {
      return 'bg-success';
    }
  }
}
