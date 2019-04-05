import { animate, keyframes, style, animation } from '@angular/animations';


export let slideInAnimation = animation([
  animate('0.5s cubic-bezier(.88,-0.19,.26,1.27)', keyframes([
    style({
      height: 0,
      opacity: 0,
      transform: 'translateX(-100%)'
    }),
    style({
      height: '50px',
    }),
    style({
      opacity: 1,
      transform: 'translateX(0)'
    })
  ]))
])


export let slideOutAnimation = animation([
  animate('0.5s cubic-bezier(.88,-0.19,.26,1.27)', keyframes([
    style({
      height: '50px',
      opacity: 1,
      transform: 'translateX(0)'
    }),
    style({
      opacity: 0,
      transform: 'translateX(-100%)'
    }),
    style({
      height: 0
    }),
  ]))
])