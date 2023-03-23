import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { UsersService, Usuarios } from 'src/app/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements OnInit {

  newUsuario: Usuarios = <Usuarios>{};

  usuarios : Usuarios[] = [];


  //Variables para Metodo Mostrar
  passwordType: string = 'password';
  passwordShown: boolean = false;
  iconEye: string = 'eye';
  colorEye: string = 'medium';

  constructor(private toastController: ToastController, private storageService: UsersService, private router : Router, public navCtrl: NavController) { }

  ngOnInit() {

  }
  //Método para ver contraseña
  mostrar(){
    if(this.passwordShown)
    {
      this.passwordShown = false;
      this.passwordType = 'password'; 
      this.iconEye= 'eye';
      this.colorEye = 'medium';
    } 
    else 
    {
      this.passwordShown = true;
      this.passwordType = 'text'; 
      this.iconEye= 'eye-off';
      this.colorEye = 'light';
    }   
  }

  //Método para validar datos antes de ingresarlos
  revisaAdd(){
    this.storageService.getDatos().then(usuarios=>{
      this.usuarios = usuarios; 

      if(this.usuarios===null){
        this.storageService.addDatos(this.newUsuario); 
        this.showToast('Usted se ha registrado.');
        this.newUsuario = <Usuarios>{};
        this.router.navigate(['./home']);
        return console.log('Arreglo nulo, por lo tanto se agregó.');
      }

      for(let i = 0; i<=this.usuarios.length - 1 ; i++)
      {
        if(this.usuarios[i].email.toLocaleLowerCase()===this.newUsuario.email.toLocaleLowerCase())
        {
         this.showToast('Usted ya posee una cuenta.');
         this.newUsuario = <Usuarios>{};
         return console.log('El usuario si estaba en el registro, por lo tanto no hizo nada.');
        }
      }

      this.storageService.addDatos(this.newUsuario); 
      this.showToast('Usted se ha registrado.');
      this.newUsuario = <Usuarios>{};
      //this.router.navigate(['./home']);

      return console.log('El usuario no estaba en el registro, por lo tanto se agregó.');
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
