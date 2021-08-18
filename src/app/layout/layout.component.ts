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

  constructor(
    private atributo: AtributoService
  ) {}

  ngOnInit(): void {
    this.atributo.getAtributos().subscribe(atributos => {
      this.atributos = atributos
    });
  }
}
