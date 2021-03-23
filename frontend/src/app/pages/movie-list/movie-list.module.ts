import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MovieListPage } from './movie-list.page';
import { MovieGraphicComponent } from './movie-graphic/movie-graphic.component';
import { MovieFormComponent } from './movie-form/movie-form.component';

const routes: Routes = [
  {
    path: '',
    component: MovieListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [MovieFormComponent],
  declarations: [MovieListPage, MovieGraphicComponent, MovieFormComponent],
})
export class MovieListPageModule {}
