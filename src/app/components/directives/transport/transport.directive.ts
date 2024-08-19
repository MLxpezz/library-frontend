import { animate, AnimationBuilder, style } from '@angular/animations';
import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[Transport]',
  standalone: true,
})
export class TransportDirective {
  elementRef: ElementRef = inject(ElementRef);
  builder: AnimationBuilder = inject(AnimationBuilder);

  private player = this.builder
    .build([
      style({ transform: 'translateX(100%)' }),
      animate('0.6s ease-in-out', style({ transform: 'translateX(0)' })),
    ])
    .create(this.elementRef.nativeElement);

  ngOnInit(): void {
    this.player.play();
  }
}
