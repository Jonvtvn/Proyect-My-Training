import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  constructor(private toastController: ToastController, public navCtrl: NavController, private router : Router) {
  }


  //Función para Cerrar Sesión, solo cambia el estado de LOGEADO
  cerrarSesion(){
    localStorage.removeItem('ingresado');
    this.navCtrl.navigateRoot('login');

    console.log('Usted cerro su sesion.')
    this.showToast('Usted ha cerrado su sesión.');
  }

  //Creación de función para Showtoast
  async showToast(msg){
    const toast = await this.toastController.create({
      message: msg, 
      duration: 2500,
      cssClass: "CustomToast"
    });
    toast.present();
  }
}
