import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais-table',
  templateUrl: './pais-table.component.html',
})
export class PaisTableComponent implements OnInit {

  @Input() mostrarPaises: Country[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}
