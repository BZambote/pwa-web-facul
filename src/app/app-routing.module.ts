import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JsonPipe } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }