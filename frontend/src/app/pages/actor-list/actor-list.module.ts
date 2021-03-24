import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ActorListPage } from './actor-list.page';
import { ActorGraphicComponent } from './actor-graphic/actor-graphic.component';
import { ActorFormComponent } from './actor-form/actor-form.component';

const routes: Routes = [
  {
    path: '',
    component: ActorListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [ActorFormComponent],
  declarations: [ActorListPage, ActorGraphicComponent, ActorFormComponent],
})
export class ActorListPageModule {}
