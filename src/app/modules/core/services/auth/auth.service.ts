import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import auth from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public firebaseAuth: AngularFireAuth,
    private router: Router
  ) {}

  setPersistance(): Promise<void> {
    return this.firebaseAuth.setPersistence(auth.auth.Auth.Persistence.SESSION);
  }

  signIn(email: string, password: string) {
    return this.firebaseAuth.signInWithEmailAndPassword(email, password);
  }

  signUp(email: string, password: string) {
    return this.firebaseAuth.createUserWithEmailAndPassword(email, password);
  }

  // AUN SIN USO
  autoLogout(expirationTimeInMinutes: number) {
    const timeInMiliseconds = expirationTimeInMinutes * 60 * 1000;
    setTimeout(() => {
      this.logOut();
    }, 5000);
  }

  logOut() {
    localStorage.clear();
    this.router.navigate(['/authentication', 'login']);
    return this.firebaseAuth.signOut();
  }

  hasUser() {
    return this.firebaseAuth.authState;
  }

  getUser() {
    return this.firebaseAuth.user;
  }

}
