import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FooterComponent } from './footer/footer.component';

import { AppComponent } from './app.component';
import { ParticlesModule } from 'angular-particle';
import { HeaderComponent } from './header/header.component';

import { CommonService } from './common.service';
import { AppRoutingModule } from './app-routing/app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, ParticlesModule
  ],
  exports: [],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
