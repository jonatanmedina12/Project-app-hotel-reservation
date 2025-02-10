import {
    trigger,
    state,
    style,
    animate,
    transition,
    query,
    stagger
  } from '@angular/animations';
  
  export const headerAnimations = {
    fadeSlide: trigger('fadeSlide', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)', opacity: 0 }),
        animate('0.4s ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
      ])
    ]),
  
    pulseAnimation: trigger('pulseAnimation', [
      transition(':enter', [
        style({ transform: 'scale(0.9)', opacity: 0 }),
        animate('0.3s ease-out', style({ transform: 'scale(1)', opacity: 1 }))
      ]),
      transition('* => *', [
        style({ transform: 'scale(1)' }),
        animate('0.2s ease-in-out', style({ transform: 'scale(1.05)' })),
        animate('0.2s ease-in-out', style({ transform: 'scale(1)' }))
      ])
    ]),
  
    staggerAnimation: trigger('staggerAnimation', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(-15px)' }),
          stagger('50ms', [
            animate('0.3s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ]),
  
    searchAnimation: trigger('searchAnimation', [
      state('hidden', style({
        height: '0',
        opacity: '0',
        overflow: 'hidden'
      })),
      state('visible', style({
        height: '*',
        opacity: '1'
      })),
      transition('hidden <=> visible', [
        animate('0.3s ease-in-out')
      ])
    ])
  };