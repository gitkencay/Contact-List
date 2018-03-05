import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

var firebaseConfig = {
  apiKey: "AIzaSyDnTNPkiqa10Ytp4yZbG87dm0_IpjG296E",
  authDomain: "contact-list-3cc3b.firebaseapp.com",
  databaseURL: "https://contact-list-3cc3b.firebaseio.com",
  projectId: "contact-list-3cc3b",
  storageBucket: "",
  messagingSenderId: "608221245034"
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [ 
    FormsModule,
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule  
  ],
  providers: [],
  bootstrap: [AppComponent]                
})
export class AppModule { }
