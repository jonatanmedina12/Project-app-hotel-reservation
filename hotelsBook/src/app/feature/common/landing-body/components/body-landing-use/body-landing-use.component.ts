import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { map, Observable, shareReplay } from 'rxjs';

interface Brand {
  icon: string;
  name: string;
  description: string;
}

@Component({
  selector: 'app-body-landing-use',
  standalone: true,
  imports: [
    MatIconModule,
    CommonModule,
    MatCardModule,
    MatTooltipModule,
  ],
  templateUrl: './body-landing-use.component.html',
  styleUrl: './body-landing-use.component.scss'
})
export class BodyLandingUseComponent implements OnInit {
  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;
  
  isHandset$: Observable<boolean>;
  // Aumentamos el número de duplicados para asegurar un scroll continuo
  duplicates = [0, 1, 2, 3];

  brands: Brand[] = [
    { icon: 'bar_chart', name: 'Analytics', description: 'Análisis avanzado de datos en tiempo real' },
    { icon: 'cloud', name: 'Cloud', description: 'Soluciones cloud escalables y seguras' },
    { icon: 'security', name: 'Security', description: 'Seguridad de última generación' },
    { icon: 'integration_instructions', name: 'Integration', description: 'Integración continua' },
    { icon: 'api', name: 'API', description: 'APIs robustas y escalables' },
    { icon: 'database', name: 'Database', description: 'Gestión de bases de datos' }
  ];

  constructor(private breakpointObserver: BreakpointObserver) {
    this.isHandset$ = this.breakpointObserver.observe([
      Breakpoints.Handset,
      Breakpoints.TabletPortrait
    ]).pipe(
      map(result => result.matches),
      shareReplay(1)
    );
  }

  ngOnInit(): void {
    this.preloadVideo();
  }

  trackByFn(index: number, item: Brand): string {
    return item.name;
  }

  trackByDuplicate(index: number): number {
    return index;
  }

  private preloadVideo(): void {
    const videoUrl = '/videos/video.mp4';
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'video';
    link.href = videoUrl;
    document.head.appendChild(link);
  }

  @HostListener('window:resize')
  onResize(): void {
    if (this.videoPlayer?.nativeElement) {
      this.videoPlayer.nativeElement.play().catch(error => {
        console.warn('Error al reproducir el video:', error);
      });
    }
  }
}