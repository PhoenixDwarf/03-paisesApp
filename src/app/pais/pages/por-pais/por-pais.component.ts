import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`
  li{
    cursor: pointer;
  }
  `
  ]
})
export class PorPaisComponent {

  termino:string = '';
  hayError:boolean = false;
  mostrarPaises:Country[] = [];
  paisesSugeridos:Country[] = [];
  mostrarSugerencias:boolean = false;



  constructor(private paisService:PaisService) { }

  buscar( termino:string){

    this.mostrarSugerencias = false;
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarPais(termino)
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
    this.termino = termino;
    this.mostrarSugerencias = true;
    
    this.paisService.buscarPais(termino)
    .subscribe({
      next: (paises) => {
        this.paisesSugeridos = paises.slice(0,5);
      },
      error: (err) => {
        this.paisesSugeridos = [];
      }
    });
  }

  buscarSugerido( termino:string ){
    this.buscar(termino);
  }

}
