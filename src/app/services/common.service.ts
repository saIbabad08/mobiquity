import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
 apiKey="3d8b309701a13f65b660fa2c64cdc517";
 url ="http://api.openweathermap.org/data/2.5/weather?"
  constructor(private http:HttpClient) { }

getWeatherDetails(name){
  return this.http.get(`${this.url}q=${name}&appid=${this.apiKey}`)
   
}

}
