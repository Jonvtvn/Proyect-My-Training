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
  selector: 'app-abdomen',
  templateUrl: './abdomen.page.html',
  styleUrls: ['./abdomen.page.scss'],
})
export class AbdomenPage implements OnInit {

  //Lista de Ejercicios
  ejercicios : Ejercicio [] = 
  [
    {
      id: '1AB',
      nombre: 'Plancha',
      imagen: '/assets/img/plancha.png',
      gif: '/assets/gif/plancha1.gif',
      descripcion: 'Túmbate apoyando los dedos de los pies y los antebrazos en el suelo. Mantén el cuerpo recto y quédate en esta posición el tiempo que puedas. La Plancha fortalece los abdominales, la espalda y los hombros.'
    },
    {
      id: '2AB',
      nombre: 'Abdominales',
      imagen: '/assets/img/abdominales.jpg',
      gif: '/assets/gif/abdominales1.gif',
      descripcion: 'Túmbate apoyando la espalda, con las manos detrás de la cabeza. Luego levanta la parte superior del cuerpo todo lo que puedas. Vuelve a bajar despacio hasta la posición inicial y repite el ejercicio.'
    },
    {
      id: '3AB',
      nombre: 'Escalada de Montaña',
      imagen: '/assets/img/escaladamontana.jpg',
      gif: '/assets/gif/escaladamontana.gif',
      descripcion: 'Comienza en posición para hacer flexiones, trae la rodilla derecha hacia el pecho, pega un salto y cambia de pie en el aire, metiendo el pie izquierdo y sacando el derecho. Este ejercicio fortalece diversos grupos musculares además del sistema cardiovascular.'
    },
    {
      id: '4AB',
      nombre: 'Piernas Elevadas',
      imagen: '/assets/img/piernaselevadas.jpg',
      gif: '/assets/gif/piernaselevadas1.gif',
      descripcion: 'Túmbate de espaldas y coloca las manos debajo de las caderas a modo de apoyo.  Luego eleva las piernas rectas hasta formar un ángulo recto con el suelo. Baja las piernas despacio y vuelve a repetir.'
    }

  ];

  constructor(private menuController: MenuController) { }

  //Muestra menu lateral
  mostrarMenu(){
    this.menuController.open('first')
  }

  ngOnInit() {
  }

}
