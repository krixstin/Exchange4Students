import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import{MatButtonModule} from '@angular/material/button'
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import { MystoreComponent } from './mystore/mystore.component';
import { BrowseComponent } from './browse/browse.component';
import { from } from 'rxjs';
import { AdditemComponent } from './mystore/additem/additem.component';
import { ListitemComponent } from './mystore/listitem/listitem.component';
import { environment } from 'src/environments/environment';
import { BrBooksComponent } from './browse/br-books/br-books.component';
import { BrClothingComponent } from './browse/br-clothing/br-clothing.component';
import { BrFurnitureComponent } from './browse/br-furniture/br-furniture.component';
import { BrElectronicsComponent } from './browse/br-electronics/br-electronics.component';
import { BrSportsgearComponent } from './browse/br-sportsgear/br-sportsgear.component';
import { BrItemComponent } from './browse/br-item/br-item.component';
import { AddBooksComponent } from './mystore/additem/add-books/add-books.component';
import { AddClothingComponent } from './mystore/additem/add-clothing/add-clothing.component';
import { AddElectronicsComponent } from './mystore/additem/add-electronics/add-electronics.component';
import { AddFurnitureComponent } from './mystore/additem/add-furniture/add-furniture.component';
import { AddSportsgearComponent } from './mystore/additem/add-sportsgear/add-sportsgear.component';
import { CartComponent } from './browse/cart/cart.component';



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASAE6eJMzQNBcZrTyDeBKRhkgbOYLJutw",
  authDomain: "exchange-7feda.firebaseapp.com",
  projectId: "exchange-7feda",
  storageBucket: "exchange-7feda.appspot.com",
  messagingSenderId: "672482746687",
  appId: "1:672482746687:web:84b7cfb9abf19b6849b38a",
  measurementId: "G-NCDDYWT22M"
};


@NgModule({
  declarations: [ //privately available to that module
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    MystoreComponent,
    BrowseComponent,
    AdditemComponent,
    ListitemComponent,
    BrBooksComponent,
    BrClothingComponent,
    BrFurnitureComponent,
    BrElectronicsComponent,
    BrSportsgearComponent,
    BrItemComponent,
    AddBooksComponent,
    AddClothingComponent,
    AddElectronicsComponent,
    AddFurnitureComponent,
    AddSportsgearComponent,
    CartComponent,
    

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,

    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, BrowserAnimationsModule, // storage
    ReactiveFormsModule,
    FormsModule,

    
  ],
  providers: [AngularFirestore], //register data provider
  bootstrap: [AppComponent] //by default, app component
})
export class AppModule {
  
  
 }
 
 