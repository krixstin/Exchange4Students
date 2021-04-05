import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';

import{MatButtonModule} from '@angular/material/button'
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import { MystoreComponent } from './mystore/mystore.component';
import { BrowseComponent } from './browse/browse.component';
import { from } from 'rxjs';
import { AdditemComponent } from './mystore/additem/additem.component';

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
    

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,

    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, BrowserAnimationsModule, // storage
  ],
  providers: [], //register data provider
  bootstrap: [AppComponent] //by default, app component
})
export class AppModule {
  constructor(private router:Router){
  }
  
  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }
  
 }
 