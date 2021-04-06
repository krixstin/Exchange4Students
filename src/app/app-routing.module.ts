import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrBooksComponent } from './browse/br-books/br-books.component';
import { BrClothingComponent } from './browse/br-clothing/br-clothing.component';
import { BrElectronicsComponent } from './browse/br-electronics/br-electronics.component';
import { BrFurnitureComponent } from './browse/br-furniture/br-furniture.component';
import { BrSportsgearComponent } from './browse/br-sportsgear/br-sportsgear.component';
import { BrowseComponent } from './browse/browse.component';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { AdditemComponent } from './mystore/additem/additem.component';
import { MystoreComponent } from './mystore/mystore.component';
import { RegisterComponent } from './register';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'browse', component: BrowseComponent },
  { path: 'br-books', component: BrBooksComponent },
  { path: 'br-clothing', component: BrClothingComponent },
  { path: 'br-furniture', component: BrFurnitureComponent },
  { path: 'br-electronics', component: BrElectronicsComponent },
  { path: 'br-sportsgear', component: BrSportsgearComponent },

  { path: 'mystore', component: MystoreComponent },
  { path: 'additem', component: AdditemComponent },
  
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
