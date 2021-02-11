import { Component, Input, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.scss']
})
export class CityDetailsComponent implements OnInit {
@Input() cityData:any;
forecastData :any = {};
  constructor( private commonService:CommonService) { }

  ngOnInit(): void {
    if(this.cityData){

      this.commonService.getWeatherReport(this.cityData.name).pipe(first()).subscribe(
        res=>{console.info(res);
          this.forecastData = res;
          this.forecastData.list = this.forecastData.list.filter(item=>new Date(item.dt_txt).getHours() == 9);
          console.log("data",this.forecastData.list)
        },
        err=>console.error(err)
      )
    }
  }

}
