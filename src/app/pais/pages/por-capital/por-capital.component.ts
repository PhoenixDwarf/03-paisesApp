import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent{

  termino:string = '';
  hayError:boolean = false;
  mostrarPaises:Country[] = [];

  constructor(private paisService:PaisService) {}

  buscar( termino:string){

    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarCapital(termino)
    .subscribe({
      next: (paises) => {
        this.mostrarPaises = paises;
      },
      error: (err) => {
        this.hayError = true;
        this.mostrarPaises = [];
      }
    });
  }

  sugerencias(termino:string){
    this.hayError = false;
    
  }

}
