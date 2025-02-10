import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    RouterModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isLoading = false;
  hidePassword = true;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar,
    private cdr: ChangeDetectorRef
  ) {
    this.loginForm = this.initializeForm();
  }

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/']);
    }
  }

  private initializeForm(): FormGroup {
    return this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(6)
      ]],
      rememberMe: [false]
    });
  }

  setLoading(loading: boolean) {
    this.isLoading = loading;
    if (loading) {
      this.loginForm.disable();
    } else {
      this.loginForm.enable();
    }
    this.cdr.detectChanges();
  }

  async onSubmit(): Promise<void> {
    if (this.loginForm.valid && !this.isLoading) {
      try {
        this.setLoading(true);
        const { email, password } = this.loginForm.getRawValue();
        await this.authService.emailLogin(email, password);
        this.showMessage('Login successful!', 'success');
        await this.router.navigate(['/']);
      } catch (error: any) {
        this.handleLoginError(error);
      } finally {
        this.setLoading(false);
      }
    } else {
      this.markFormFieldsAsTouched();
    }
  }

  async loginWithGoogle(): Promise<void> {
    if (!this.isLoading) {
      try {
        this.setLoading(true);
        await this.authService.googleLogin();
        this.showMessage('Google login successful!', 'success');
        await this.router.navigate(['/']);
      } catch (error: any) {
        this.handleLoginError(error);
      } finally {
        this.setLoading(false);
      }
    }
  }

  private handleLoginError(error: any): void {
    console.error('Login error:', error);
    let errorMessage = 'An error occurred during login';

    if (error.code) {
      switch (error.code) {
        case 'auth/user-not-found':
          errorMessage = 'No account found with this email';
          break;
        case 'auth/wrong-password':
          errorMessage = 'Invalid password';
          break;
        case 'auth/too-many-requests':
          errorMessage = 'Too many failed attempts. Please try again later';
          break;
        case 'auth/popup-closed-by-user':
          errorMessage = 'Login popup was closed';
          break;
        case 'auth/popup-blocked':
          errorMessage = 'Login popup was blocked by the browser';
          break;
        default:
          errorMessage = error.message || 'Authentication failed';
      }
    }

    this.showMessage(errorMessage, 'error');
  }

  private showMessage(message: string, type: 'success' | 'error'): void {
    this.snackBar.open(message, 'Close', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: type === 'success' ? ['success-snackbar'] : ['error-snackbar']
    });
  }

  private markFormFieldsAsTouched(): void {
    Object.keys(this.loginForm.controls).forEach(key => {
      const control = this.loginForm.get(key);
      control?.markAsTouched();
    });
  }

  getErrorMessage(field: string): string {
    const control = this.loginForm.get(field);
    
    if (!control?.errors || !control.touched) return '';

    if (control.hasError('required')) {
      return 'This field is required';
    }

    if (field === 'email') {
      if (control.hasError('email') || control.hasError('pattern')) {
        return 'Please enter a valid email address';
      }
    }

    if (field === 'password') {
      if (control.hasError('minlength')) {
        return 'Password must be at least 6 characters long';
      }
    }

    return 'Invalid input';
  }
}