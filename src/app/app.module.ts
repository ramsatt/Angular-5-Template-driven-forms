import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { TemplatedrivenformComponent } from './templatedrivenform/templatedrivenform.component';


@NgModule({
  declarations: [
    AppComponent,
    TemplatedrivenformComponent
  ],
  imports: [
    BrowserModule,
      FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
