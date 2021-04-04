import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowseComponent } from './browse/browse.component';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { MystoreComponent } from './mystore/mystore.component';
import { RegisterComponent } from './register';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'browse', component: BrowseComponent },
  { path: 'mystore', component: MystoreComponent },
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
