import { Component, HostListener } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-top-header',
  standalone: true,
  imports: [    
    CommonModule,
    RouterModule,  // Material Modules
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSnackBarModule,MatListModule],
  templateUrl: './top-header.component.html',
  styleUrl: './top-header.component.scss',
  animations: [
    trigger('headerAnimation', [
      state('visible', style({
        transform: 'translateY(0)',
        opacity: 1
      })),
      state('hidden', style({
        transform: 'translateY(-100%)',
        opacity: 0
      })),
      transition('hidden <=> visible', animate('400ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ]),
    trigger('slideInLeft', [
      transition(':enter', [
        style({ transform: 'translateX(-30px) rotateY(-90deg)', opacity: 0 }),
        animate('800ms cubic-bezier(0.35, 0, 0.25, 1)', 
          style({ transform: 'translateX(0) rotateY(0)', opacity: 1 }))
      ])
    ]),
    trigger('slideInRight', [
      transition(':enter', [
        style({ transform: 'translateX(30px) rotateY(90deg)', opacity: 0 }),
        animate('800ms cubic-bezier(0.35, 0, 0.25, 1)', 
          style({ transform: 'translateX(0) rotateY(0)', opacity: 1 }))
      ])
    ]),
    trigger('fadeInTop', [
      transition(':enter', [
        style({ transform: 'translateY(-20px) scale(0.8)', opacity: 0 }),
        animate('1000ms cubic-bezier(0.35, 0, 0.25, 1)', 
          style({ transform: 'translateY(0) scale(1)', opacity: 1 }))
      ])
    ]),
    trigger('menuStagger', [
      transition('* => *', [
        style({ transform: 'translateY(-10px) rotateX(-90deg)', opacity: 0 }),
        animate('600ms {{ delay }}ms cubic-bezier(0.35, 0, 0.25, 1)',
          style({ transform: 'translateY(0) rotateX(0)', opacity: 1 }))
      ])
    ])
  ]
})
export class TopHeaderComponent {
  headerState = 'visible';
  mobileMenuState = 'closed';

  menuItems = [
    { label: 'Inicio', icon: 'home' },
    { label: 'Conócenos', icon: 'groups' },
    { label: 'Servicios', icon: 'widgets' },
    { label: 'Contacto', icon: 'mail_outline' }
  ];

  toggleMobileMenu() {
    this.mobileMenuState = this.mobileMenuState === 'closed' ? 'open' : 'closed';
  }

  closeMobileMenu() {
    this.mobileMenuState = 'closed';
  }

  login() {
    this.closeMobileMenu();
    // Implementar lógica de login
    console.log('Login clicked');
  }

  register() {
    this.closeMobileMenu();
    // Implementar lógica de registro
    console.log('Register clicked');
  }
}
