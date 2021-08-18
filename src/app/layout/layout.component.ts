import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  atributos = [
    { nombre: 'Audiencias pendientes', cantidad: 11 },
    { nombre: 'Causas litigantes', cantidad: 45 },
    { nombre: 'Genchi servicio de gendarmería', cantidad: 0 },
    { nombre: 'Incompetencias especiales', cantidad: 20 },
    { nombre: 'Medidas cautelares vigentes', cantidad: 15 },
    { nombre: 'Multas vencidas / pendientes', cantidad: 32 },
    { nombre: 'Notificaciones pendientes', cantidad: 25 },
    { nombre: 'Órdenes de detención vigentes', cantidad: 444 },
    { nombre: 'Sentencias', cantidad: 8 },
    { nombre: 'Situación de libertad', cantidad: 4 },
  ];

  constructor() {}

  ngOnInit(): void {}
}
