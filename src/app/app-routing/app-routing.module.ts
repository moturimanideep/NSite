import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from '../landingpage/landingpage.component';
import { FooterComponent } from '../footer/footer.component';
const routes: Routes = [
  {
      path: '', component: LandingpageComponent,
  },
];
@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
],
  declarations: [LandingpageComponent, FooterComponent]
})
export class AppRoutingModule { }
