import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

interface Ejercicio
{
  id: string,
  nombre: string,
  imagen: string,
  gif: string,
  descripcion: string
}

@Component({
  selector: 'app-legs',
  templateUrl: './legs.page.html',
  styleUrls: ['./legs.page.scss'],
})
export class LegsPage implements OnInit {

  //Lista de Ejercicios
  ejercicios : Ejercicio [] = 
  [
    {
      id: '1LE',
      nombre: 'Sentadilla',
      imagen: '/assets/img/sentadilla.jpg',
      gif: '/assets/gif/sentadilla1.gif',
      descripcion: 'El ejercicio consiste en flexionar las rodillas y bajar el cuerpo manteniendo la verticalidad, para luego regresar a una posición erguida.'
    },
    {
      id: '2LE',
      nombre: 'Zancada',
      imagen: '/assets/img/zancada.jpg',
      gif: '/assets/gif/zancada1.gif',
      descripcion: 'La posición inicial es de pie, con las manos dispuestas en jarra, sobre la cintura, y las piernas algo separadas. Toma aire y da un paso hacia delante. Procura que el torso esté recto y perpendicular al suelo cuando lleves a cabo el movimiento.'
    },
    {
      id: '3LE',
      nombre: 'Sentadilla de Sumo',
      imagen: '/assets/img/sentadillasumo.jpg',
      gif: '/assets/gif/sentadillasumo.gif',
      descripcion: 'De pie, con los pies separados entre unos 15 a 30 cm. Estira los brazos hacia delante. Baja el cuerpo hasta que los muslos estén paralelos al suelo. Vuelve a la posición inicial y repite el ejercicio.'
    },
    {
      id: '4LE',
      nombre: 'Sendillas de Pared',
      imagen: '/assets/img/sentadillapared.jpg',
      gif: '/assets/gif/sentadillapared.gif',
      descripcion: 'Apoya la espalda contra una pared, mantén la espalda recta, baje hasta que sus rodillas estén en ángulo recto y permanezca en esa posición. Este ejercicio se realiza para fortalecer los músculos del cuádriceps.'
    }

  ];

  constructor(private menuController: MenuController) { }

  //Metodo para Abrir Menu Lateral
  mostrarMenu(){
    this.menuController.open('first')
  }

  ngOnInit() {
  }

}
