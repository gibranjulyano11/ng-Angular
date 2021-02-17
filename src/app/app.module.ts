import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListadoComponent } from './Ejercicio3/listado/listado.component';
/*import {ContadorComponent} from './Ejercicio1/contador.component';
*/

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    //ContadorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

