import { Component, OnInit } from '@angular/core';
import { MylistService, Ejercicios } from 'src/app/services/mylist.service';
import { MenuController , Platform } from '@ionic/angular';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.page.html',
  styleUrls: ['./my-list.page.scss'],
})
export class MyListPage implements OnInit {

  ejercicios: Ejercicios[] = [];

  constructor(
    private menuController: MenuController, 
    private storageService: MylistService,
    private platform:Platform) 
    {
      this.platform.ready().then(()=>{
        this.loadDatos();
      });
    }

  ionViewWillEnter(){
    this.loadDatos();
  }  

  ngOnInit() {
    this.loadDatos();
  }

  //Metodo para Obtener los Datos
  loadDatos(){
    this.storageService.getDatos().then(ejercicios=>{
      this.ejercicios=ejercicios;
    });
  }

  //Metodo para Mostrar Menu
  mostrarMenu(){
    this.menuController.open('first')
  }

}
