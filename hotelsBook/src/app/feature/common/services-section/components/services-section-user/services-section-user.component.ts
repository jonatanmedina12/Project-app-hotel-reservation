import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
interface Service {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-services-section-user',
  standalone: true,
  imports: [   CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule],
  templateUrl: './services-section-user.component.html',
  styleUrl: './services-section-user.component.scss'
})
export class ServicesSectionUserComponent {
  services: Service[] = [
    {
      icon: 'computer',
      title: 'Desarrollo Web',
      description: 'Creamos soluciones web personalizadas y adaptativas que impulsan su negocio.'
    },
    {
      icon: 'mobile_friendly',
      title: 'Aplicaciones Móviles',
      description: 'Desarrollamos apps nativas y multiplataforma con las últimas tecnologías.'
    },
    {
      icon: 'cloud_done',
      title: 'Cloud Solutions',
      description: 'Implementamos soluciones cloud escalables y seguras para su empresa.'
    }
  ];
}
