import { animate, AnimationBuilder, style } from '@angular/animations';
import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[Fade]',
  standalone: true
})
export class FadeDirective {
  elementRef: ElementRef = inject(ElementRef);
  builder: AnimationBuilder = inject(AnimationBuilder);

  private player = this.builder.build([
    style({opacity: 0}),
    animate('1.2s ease-in', style({opacity: 1}))
  ]).create(this.elementRef.nativeElement);


  ngOnInit(): void {
    this.player.play();
  }
}
