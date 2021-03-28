import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      { path: 'movie-list', loadChildren: '../movie-list/movie-list.module#MovieListPageModule' },
      { path: 'actor-list', loadChildren: '../actor-list/actor-list.module#ActorListPageModule' },
      { path: 'user-page', loadChildren: '../user-page/user-page.module#UserPagePageModule' }, 
      {
        path: '',
        redirectTo: '/tabs/movie-list',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/actor-list',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: '/tabs/movie-list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
