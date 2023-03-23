import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export interface Usuarios
{
  name: string,
  lastname:string,
  age:string,
  email:string,
  password:string
}

const ITEMS_KEY = 'my-users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private _storage : Storage;

  constructor(private storage: Storage) { 
    this.init();
  }

  //Creacion de Almacenamiento
  async init(){
    const storage = await this.storage.create();
    this._storage = storage;
  }

  //Agregar Ususuario
  addDatos(usuario : Usuarios):Promise<any>{

    return this.storage.get(ITEMS_KEY).then((usuarios : Usuarios[]) => {

      if(usuarios){
        usuarios.push(usuario);
        return this.storage.set(ITEMS_KEY, usuarios)
      }
      else
      {
        return this.storage.set(ITEMS_KEY, [usuario])
      }
    }) 
  }

  //Obtiene Informacion Almacenada en la KEY
  getDatos():Promise<Usuarios[]>{
    return this.storage.get(ITEMS_KEY);
  }








}
