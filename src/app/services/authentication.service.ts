import { User } from './../models/user';
import { AngularFireAuth } from 'angularfire4/auth';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthenticationService {
  user$: Observable<firebase.User>;  
  user = {} as User;

  constructor(private afAuth: AngularFireAuth) { 
    this.user$ = afAuth.authState;
  }

  loginGoogle() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  async loginEmail() {
    await this.afAuth.auth.signInWithEmailAndPassword(this.user.email, this.user.password)
  }

  async createUser() {
    await this.afAuth.auth.createUserWithEmailAndPassword(this.user.email, this.user.password);
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
