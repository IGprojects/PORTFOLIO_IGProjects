import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html', //AQUI ES PODRIA ESCRIURE DIRECTAMENT EL CONTINGUT HTML
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  public nombre: string;
  public especialidad: string;

  constructor() {
    this.nombre = 'Ignasi Ferrés';
    this.especialidad = 'Programador Fullstack';
  }

}
