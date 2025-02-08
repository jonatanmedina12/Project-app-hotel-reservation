import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { headerAnimations } from '../../utils/header-animations';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

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
    MatSnackBarModule],
  templateUrl: './top-header.component.html',
  styleUrl: './top-header.component.scss',
  animations: [
    headerAnimations.fadeSlide,
    headerAnimations.pulseAnimation,
    headerAnimations.staggerAnimation,
    headerAnimations.searchAnimation
  ]
})
export class TopHeaderComponent {
  searchState: 'visible' | 'hidden' = 'hidden';

  toggleSearch() {
    this.searchState = this.searchState === 'hidden' ? 'visible' : 'hidden';
  }
}
