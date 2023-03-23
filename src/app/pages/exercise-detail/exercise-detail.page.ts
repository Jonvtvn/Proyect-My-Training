import { Component, OnInit } from '@angular/core';
import { MylistService, Ejercicios } from 'src/app/services/mylist.service';
import { ActivatedRoute } from '@angular/router';
import {ToastController} from '@ionic/angular';

@Component({
  selector: 'app-exercise-detail',
  templateUrl: './exercise-detail.page.html',
  styleUrls: ['./exercise-detail.page.scss'],
})
export class ExerciseDetailPage implements OnInit {

  ejercicio : {id:string, nombre:string, imagen: string, gif: string, descripcion: string};


  //Para validar Creo
  ejercicios : Ejercicios[] = [];

  constructor(private rutaActiva: ActivatedRoute, private storageService: MylistService, private toastController: ToastController) { }


  //Cuando la page se inicia recupera los datos que se envian por parametros
  ngOnInit() {
    this.rutaActiva.paramMap.subscribe(paramMap => {
      this.ejercicio ={
        id: paramMap.get('Id'),
        nombre: paramMap.get('Nombre'),
        imagen: paramMap.get('Imagen'),
        gif: paramMap.get('Gif'),
        descripcion: paramMap.get('Descripcion')       
      }
    });
  }
  

  //Agrega el dato al arreglo si es que no esta.
  revisaAdd(){

    this.storageService.getDatos().then(ejercicios=>{
      this.ejercicios = ejercicios; 

      if(this.ejercicios===null){
        this.storageService.addDatos(this.ejercicio); 
        this.showToast('Se añadió a Mi Lista.');
        return console.log('Arreglo nulo, por lo tanto se agregó.');
      }

      for(let i = 0; i<=this.ejercicios.length - 1 ; i++)
      {
        if(this.ejercicios[i].id===this.ejercicio.id)
        {
         this.showToast('El ejercicio ya está en Mi Lista.');
         return console.log('El ejercicio si estaba en mi lista, por lo tanto no hizo nada.');
        }
      }

      this.storageService.addDatos(this.ejercicio); 
      this.showToast('Se añadió a Mi Lista.');
      return console.log('El ejercicio no estaba en mi lista, por lo tanto se agregó.');
    });
  }

  //Borra el dato si esta.
  revisaDelete(){

    this.storageService.getDatos().then(ejercicios=>{
      this.ejercicios = ejercicios; 

      if(this.ejercicios===null){


        this.showToast('Aún no ha agregado este ejercicio a Mi Lista.');
        return console.log('Arreglo nulo, por lo tanto nada que borrar.');
      }

      for(let i = 0; i<=this.ejercicios.length - 1 ; i++)
      {
        if(this.ejercicios[i].id===this.ejercicio.id)
        {
         
         this.storageService.deleteDatos(this.ejercicio.id);
         this.showToast('El ejercicio se eliminó de Mi Lista.');
         return console.log('El ejercicio si está en mi lista, por lo tanto se borrara.');
        }
      }

      this.showToast('Aún no ha agregado este ejercicio a Mi Lista.');
      return console.log('El ejercicio no está en mi lista.');
    });

  }

  async showToast(msg){
    const toast = await this.toastController.create({
      message: msg, 
      duration: 2500,
      cssClass: "CustomToast"
    });
    toast.present();
  }


}
