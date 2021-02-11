import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
 apiKey="3d8b309701a13f65b660fa2c64cdc517";
 url ="http://api.openweathermap.org/data/2.5/"
  constructor(private http:HttpClient) { }

getWeatherDetails(name){
  return this.http.get(`${this.url}weather?q=${name}&appid=${this.apiKey}`)
   
}
getWeatherReport(name){
  return this.http.get(`${this.url}forecast?q=${name}&appid=${this.apiKey}`)
}

}
