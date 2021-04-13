import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrBooksComponent } from './browse/br-books/br-books.component';
import { BrClothingComponent } from './browse/br-clothing/br-clothing.component';
import { BrElectronicsComponent } from './browse/br-electronics/br-electronics.component';
import { BrFurnitureComponent } from './browse/br-furniture/br-furniture.component';
import { BrSportsgearComponent } from './browse/br-sportsgear/br-sportsgear.component';
import { BrowseComponent } from './browse/browse.component';
import { BrItemComponent } from './browse/br-item/br-item.component';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { AdditemComponent } from './mystore/additem/additem.component';
import { MystoreComponent } from './mystore/mystore.component';
import { RegisterComponent } from './register';
import { AddBooksComponent } from './mystore/additem/add-books/add-books.component';
import { AddSportsgearComponent } from './mystore/additem/add-sportsgear/add-sportsgear.component';
import { AddClothingComponent } from './mystore/additem/add-clothing/add-clothing.component';
import { AddElectronicsComponent } from './mystore/additem/add-electronics/add-electronics.component';
import { AddFurnitureComponent } from './mystore/additem/add-furniture/add-furniture.component';

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
  
  { path: 'br-item/:itemid', component: BrItemComponent },

  { path: 'mystore', component: MystoreComponent },
  { path: 'additem', component: AdditemComponent },
  
  { path: 'add-books', component: AddBooksComponent },
  { path: 'add-clothing', component: AddClothingComponent },
  { path: 'add-electronics', component: AddElectronicsComponent },
  { path: 'add-furniture', component: AddFurnitureComponent },
  { path: 'add-sportsgear', component: AddSportsgearComponent },

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
