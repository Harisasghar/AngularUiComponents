import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyButtonComponent } from './components/my-button/my-button.component';
import { MyInputComponent } from './components/my-input/my-input.component';

@NgModule({
  declarations: [
    AppComponent,
    MyButtonComponent,
    MyInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
