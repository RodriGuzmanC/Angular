import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './componentes/navigation/navigation.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { Router, RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    NavigationComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    NavigationComponent,
    FooterComponent,
  ]
})
export class SharedModule { }
