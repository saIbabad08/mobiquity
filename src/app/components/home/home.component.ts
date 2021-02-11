import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { from } from 'rxjs';
import { first } from 'rxjs/operators';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  stateList=["Paris","Berlin","Rome","Prague","Hamburg"]
  citiesData:any =[];
  childData:any =[];
  isChildShow:boolean= false;

  constructor(private commonService:CommonService) { }

  ngOnInit(): void {
let that = this;
    this.stateList.map(item=>{
      this.commonService.getWeatherDetails(item).pipe(first())
      .subscribe(
          data => {
            that.citiesData.push(data); 
            
          },
          error => {
             console.info(error)
          });
    })
  }

  showDetails(data:any){
this.childData = data;
this.isChildShow = !this.isChildShow;
  }

}
