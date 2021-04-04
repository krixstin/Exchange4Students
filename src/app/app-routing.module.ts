import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // otherwise redirect to home
  // { path: '**', redirectTo: '' }
];

@NgModule({ //no declaration

  ////creates a routing module
  //includes all of the Angular Router providers and 
  //directives such as the <router-outlet></router-outlet> 
  imports: [RouterModule.forRoot(routes)], 


  exports: [RouterModule]
})
export class AppRoutingModule { }
