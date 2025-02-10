import { Injectable } from '@angular/core';
import { 
  Auth, 
  signInWithEmailAndPassword, 
  signInWithPopup, 
  signOut,
  onAuthStateChanged,
  User
} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { GoogleAuthProvider } from 'firebase/auth';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user = new BehaviorSubject<User | null>(null);
  user$ = this.user.asObservable();

  constructor(
    private auth: Auth,
    private router: Router
  ) {
    // Observar cambios en el estado de autenticación
    onAuthStateChanged(this.auth, (user) => {
      this.user.next(user);
      if (user) {
        // Guardar información básica del usuario
        localStorage.setItem('user', JSON.stringify({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL
        }));
      } else {
        localStorage.removeItem('user');
      }
    });
  }

  async googleLogin(): Promise<void> {
    try {
      const provider = new GoogleAuthProvider();
      // Configurar scopes adicionales si necesitas más información
      provider.addScope('profile');
      provider.addScope('email');
      
      // Forzar selección de cuenta
      provider.setCustomParameters({
        prompt: 'select_account'
      });

      const result = await signInWithPopup(this.auth, provider);
      if (result.user) {
        await this.router.navigate(['/']);
      }
    } catch (error: any) {
      console.error('Google login error:', error);
      throw this.handleAuthError(error);
    }
  }

  async emailLogin(email: string, password: string): Promise<void> {
    try {
      const result = await signInWithEmailAndPassword(this.auth, email, password);
      if (result.user) {
        await this.router.navigate(['/']);
      }
    } catch (error: any) {
      console.error('Email login error:', error);
      throw this.handleAuthError(error);
    }
  }

  async logout(): Promise<void> {
    try {
      await signOut(this.auth);
      localStorage.removeItem('user');
      await this.router.navigate(['/login']);
    } catch (error) {
      console.error('Logout error:', error);
      throw error;
    }
  }

  isLoggedIn(): boolean {
    return this.auth.currentUser !== null;
  }

  getCurrentUser(): any {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  }

  private handleAuthError(error: any): Error {
    let message = 'An authentication error occurred';
    
    switch (error.code) {
      case 'auth/account-exists-with-different-credential':
        message = 'An account already exists with the same email address but different sign-in credentials.';
        break;
      case 'auth/popup-closed-by-user':
        message = 'The sign-in popup was closed before completing the sign-in.';
        break;
      case 'auth/popup-blocked':
        message = 'The sign-in popup was blocked by your browser. Please allow popups for this site.';
        break;
      case 'auth/cancelled-popup-request':
        message = 'The sign-in operation was cancelled.';
        break;
      case 'auth/user-not-found':
        message = 'No user found with this email address.';
        break;
      case 'auth/wrong-password':
        message = 'Incorrect password.';
        break;
      case 'auth/invalid-email':
        message = 'The email address is invalid.';
        break;
      case 'auth/user-disabled':
        message = 'This account has been disabled.';
        break;
      default:
        message = error.message || 'An unexpected error occurred.';
    }

    return new Error(message);
  }
}