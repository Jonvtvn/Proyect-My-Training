import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaToHeadLine } from '../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class ImcService {

  constructor(private http: HttpClient) { }

  getTopHeadLines(age: string, weight: string, height: string)
  {
    return this.http.get<RespuestaToHeadLine>('https://fitness-calculator.p.rapidapi.com/bmi?age='+age+'&weight='+weight+'&height='+height+'&rapidapi-host=fitness-calculator.p.rapidapi.com&rapidapi-key=242e29cd76msha14ca1d142bcfadp163603jsn705e02a86c36')
  }
}
