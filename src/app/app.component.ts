import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

interface Post {
  Fname: string;
  Lname: string;
  address: string;
  email: string;
  mobile: string;
  phone: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  postsCol: AngularFirestoreCollection<Post>;
  posts: Observable<Post[]>;

  Fname: string;
  Lname: string;
  address: string;
  email: string;
  mobile: string;
  phone: string;

  constructor(private afs: AngularFirestore) {

  }

  ngOnInit() {
    this.postsCol = this.afs.collection('posts');
    this.posts = this.postsCol.valueChanges();
  }

  addPost() {
    this.afs.collection('posts').doc('my-custom-id').set({'First Name': this.Fname, 'Last name': this.Lname, 'Address': this.address, 'E-mail Address': this.email, 'Mobile': this.mobile, 'Phone': this.phone});
  }

  
}
