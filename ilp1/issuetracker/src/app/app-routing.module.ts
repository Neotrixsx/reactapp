import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IssuesComponent } from './issues/issues.component';
import { NewissuesComponent } from './newissues/newissues.component';

const routes: Routes =  [
  {
      path: '',
      component: IssuesComponent
  },
  {
      path: 'newissue',
      component: NewissuesComponent,
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
