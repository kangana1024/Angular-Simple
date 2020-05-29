import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { PersonsComponent } from './persons/persons.component';
import { PersonsInputComponent } from './persons/person-input.component';
import { AppRoutingModule } from './app-routing.module';
import { PersonService } from './persons/person.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, PersonsComponent, PersonsInputComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), FormsModule,
    AppRoutingModule, HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    PersonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
