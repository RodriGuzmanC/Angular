import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { PostsComponent } from './posts/posts.component';
import { SharedModule } from '../shared/shared.module';
import { CardsService } from './cards/cards.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    PostsComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule,
    HttpClientModule,
  ],
  providers: [
    CardsService
  ]
})
export class BlogModule { }
