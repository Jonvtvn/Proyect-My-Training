import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export interface Ejercicios
{
  id: string;
  nombre: string;
  imagen: string;
  gif: string;
  descripcion: string;
}

const ITEMS_KEY = 'my-list';

@Injectable({
  providedIn: 'root'
})
export class MylistService {

  private _storage : Storage;

  constructor(private storage: Storage) {
    this.init();
   }

   //Metodo de Creacion de Almacenamiento
   async init(){
     const storage = await this.storage.create();
     this._storage = storage;
   }

   //Metodo para Agregar Datos en la Key
   addDatos(ejercicio : Ejercicios):Promise<any>{
     
    return this.storage.get(ITEMS_KEY).then((ejercicios : Ejercicios[])=>{

      if(ejercicios){
        ejercicios.push(ejercicio);
        return this.storage.set(ITEMS_KEY, ejercicios)
      }
      else{
        return this.storage.set(ITEMS_KEY, [ejercicio])
      }
    })
   }

   //Obtiene Informacion Almacenada en la Key
   getDatos():Promise<Ejercicios[]>{
     return this.storage.get(ITEMS_KEY);
   }

   //Elimina la Informacion Almacenada en la Key
   deleteDatos(id: string):Promise<Ejercicios>{
    
    return this.storage.get(ITEMS_KEY).then((ejercicios : Ejercicios[])=>{
      if(!ejercicios || ejercicios.length === 0 ){
        return null;
      }

      let toKeep: Ejercicios[] = [];

      for(let ejercicio of ejercicios){
        if(ejercicio.id !== id){
          toKeep.push(ejercicio);
        }
      }

      return this.storage.set(ITEMS_KEY, toKeep);
    });
   }

}
