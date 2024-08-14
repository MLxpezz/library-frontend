import { AnimationBuilder, style, animate } from '@angular/animations';
import { Directive, ElementRef, HostListener, inject, Input } from '@angular/core';

@Directive({
  selector: '[TransportTo]',
  standalone: true,
})
export class TransportToDirective {
  elementRef: ElementRef = inject(ElementRef);
  builder: AnimationBuilder = inject(AnimationBuilder);

  private player = this.builder
    .build([
      style([{ transform: 'translateX(-100%)'}]),
      animate('0.6s', style({ transform: 'translateX(0)' })),
    ])
    .create(this.elementRef.nativeElement);

    ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      this.player.play()
    }
}