import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { UsersService, Usuarios } from 'src/app/services/users.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario : Usuarios = <Usuarios>{};

  usuarios : Usuarios[] = [];


  //Variables para metodo mostrar
  passwordType: string = 'password';
  passwordShown: boolean = false;
  iconEye: string = 'eye';
  colorEye: string = 'medium';


  constructor(private toastController: ToastController, private storageService: UsersService, private router : Router, public navCtrl: NavController) { }

  ngOnInit() {
  }

  //Metodo para validar datos antes de ingresarlos
  ingresarValidar(){
    this.storageService.getDatos().then(usuarios=>{
      this.usuarios = usuarios; 

      if(this.usuarios===null){
        this.showToast('Credenciales incorrectas.');
        this.usuario = <Usuarios>{};
        return console.log('Arreglo nulo, por lo tanto, usuario no registrado.');
      }

      for(let i = 0; i<=this.usuarios.length - 1 ; i++)
      {
        if(this.usuarios[i].email.toLocaleLowerCase()===this.usuario.email.toLocaleLowerCase())
        {

          if(this.usuarios[i].password===this.usuario.password)
          {
            this.showToast('Bienvenido ' + this.capitalizar(this.usuarios[i].name.toLowerCase()) + ' ' + this.capitalizar(this.usuarios[i].lastname.toLowerCase()));

            //Para el Guard
            localStorage.setItem('ingresado','true')
            this.navCtrl.navigateRoot('home');
            //localStorage.setItem('LOGEADO','SI')

            //this.router.navigate(['./home']); 
            this.usuario = <Usuarios>{};


            return console.log('El usuario si estaba en el registro, por lo tanto ingreso.');
          }
          else{
            this.showToast('Credenciales incorrectas.');
            this.usuario = <Usuarios>{};
            return console.log('El usuario si estaba en el registro, pero contraseña incorrecta.');
          }
        }
      }

      this.usuario = <Usuarios>{};
      this.showToast('Credenciales incorrectas.');
      return console.log('El usuario no estaba en el registro.');
    });
  }

  //Metodod para mostrar Clave
  mostrar(){
    if(this.passwordShown)
    {
      this.passwordShown = false;
      this.passwordType = 'password'; 
      this.iconEye = 'eye';
      this.colorEye = 'medium';
    } 
    else 
    {
      this.passwordShown = true;
      this.passwordType = 'text'; 
      this.iconEye = 'eye-off';
      this.colorEye = 'light';
    }   
  }

  async showToast(msg){
    const toast = await this.toastController.create({
      message: msg, 
      duration: 2500,
      cssClass: "CustomToast"
    });
    toast.present();
  }

  //Metodod para capitalizar String
  capitalizar(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

}
