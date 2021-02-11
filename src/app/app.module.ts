import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RoutingModule } from './routing.module';
import { HomeComponent } from './components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from "@angular/common/http";
import { CustomDatePipe } from './custom-date.pipe';
import { CityDetailsComponent } from './components/city-details/city-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomDatePipe,
    CityDetailsComponent
  ],
  imports: [
    BrowserModule,RoutingModule, NgbModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
