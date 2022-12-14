import { TextComponent } from './pages/text/text.component';
import { CurrentProjectComponent } from './pages/current-project/current-project.component';
import { CreateProjectComponent } from './pages/create-project/create-project.component';
import { ArchiveComponent } from './pages/archive/archive.component';

import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path:'archive',
        component: ArchiveComponent
      },
      {
        path: 'create',
        component: CreateProjectComponent
      },
      {
        path: 'current',
        component: CurrentProjectComponent
      },
      {
        path: 'edit/:id',
        component: TextComponent
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class TextsRoutingModule { }
