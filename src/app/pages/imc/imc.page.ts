import { Component, OnInit } from '@angular/core';
import { ImcService } from 'src/app/services/imc.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.page.html',
  styleUrls: ['./imc.page.scss'],
})
export class ImcPage implements OnInit {

  //Objetos a usar
  imc = {
    age:'',
    weight:'',
    height:''
  }

  resultado = {
    bmi: '',
    health: '',
    healthy_bmi_range: '',
    color: ''
  }

  constructor(private imcService: ImcService, private menuController: MenuController) { }

  //Metodo para mostrar menu lateral
  mostrarMenu(){
    this.menuController.open('first')
  }

  //Metodo para recuperar color del BMI
  tomarColor(bmi : string){

    var numerobmi = Number(bmi);
    var colorHEX = '';

    if(numerobmi<18.5)
    {
      colorHEX ='#2dabfc;';
    }
    else if(numerobmi>=18.5 && numerobmi<=24.9)
    {
      colorHEX ='#32d364;';
    }
    else if(numerobmi>=25 && numerobmi<=29.9)
    {
      colorHEX ='#f3ed3e;';
    }
    else if(numerobmi>=30 && numerobmi<=34.9)
    {
      colorHEX ='#fd7d23;';
    }
    else
    {
      colorHEX ='#f14337;';
    }
    return colorHEX;
  }


  ngOnInit() {
  
  }

  //Metodo para envio de datos
  onSubmit(){

    console.log('Ingreso',this.imc)

    if( (Number(this.imc.age)>=0 && Number(this.imc.age)<=80) && (Number(this.imc.weight)>=40 && Number(this.imc.weight)<=160) && (Number(this.imc.height)>=130 && Number(this.imc.height)<=230) )
    {
      this.imcService.getTopHeadLines(this.imc.age, this.imc.weight, this.imc.height).subscribe(respuesta=>{

        this.resultado.bmi = Number(respuesta.data.bmi).toFixed(1).toString(),
        this.resultado.health = respuesta.data.health,
        this.resultado.healthy_bmi_range = respuesta.data.healthy_bmi_range,
        this.resultado.color = this.tomarColor(this.resultado.bmi)


        console.log('Salida Datos Validados', this.resultado)
      });
    } 
    else
    {
      this.resultado.bmi='NaN',
      this.resultado.health='NaN,nan',
      this.resultado.healthy_bmi_range='NaN',
      this.resultado.color='NaN'

      console.log('Salida, Datos No Validos', this.resultado)
    }
  }

}
