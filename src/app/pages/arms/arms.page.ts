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
  selector: 'app-arms',
  templateUrl: './arms.page.html',
  styleUrls: ['./arms.page.scss'],
})
export class ArmsPage implements OnInit {

  //Lista de Ejercicios
  ejercicios : Ejercicio [] = 
  [
    {
      id: '1AR',
      nombre: 'Flexiones',
      imagen: '/assets/img/flexiones1.jpg',
      gif: '/assets/gif/flexiones1.gif',
      descripcion: 'Suba y baje el cuerpo con los brazos, mantenga el cuerpo recto. Procure que los codos formen 45 grados con el tronco, este ejercicio trabaja los músculos del pecho, hombros, tríceps, espalda y piernas.'
    },
    {
      id: '2AR',
      nombre: 'Fondos en Banco',
      imagen: '/assets/img/fondosenbanco.jpg',
      gif: '/assets/gif/fondosenbanco1.gif',
      descripcion: 'Flexiona los brazos, manteniendo los codos a los lados y hacia atrás. Baja el cuerpo lentamente hasta que la parte superior de los brazos quede paralela al piso. Empuja con las manos y endereza los brazos para volver a la posición inicial.'
    },
    {
      id: '3AR',
      nombre: 'Elevaciones Laterales',
      imagen: '/assets/img/elevacioneslaterales.png',
      gif: '/assets/gif/elevacioneslaterales1.gif',
      descripcion: 'Colócate de pie y con los pies alineados con los hombros. Eleva los brazos hacia los lados a la altura de los hombros y bájalos. Repite el ejercicio.'
    },
    {
      id: '4AR',
      nombre: 'Up Down Plank',
      imagen: '/assets/img/updownplank.jpg',
      gif: '/assets/gif/updownplank1.gif',
      descripcion: 'Empieza en posición de plancha y luego levántate poniendo primero una mano en el suelo y luego la otra. Después vuelve a apoyar los brazos como al principio.'
    },
  ];

  constructor(private menuController: MenuController) { }

  //Muestra menu lateral
  mostrarMenu(){
    this.menuController.open('first')
  }

  ngOnInit() {
  }

}
