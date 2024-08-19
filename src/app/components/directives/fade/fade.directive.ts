import {
  animate,
  AnimationBuilder,
  AnimationPlayer,
  style,
} from '@angular/animations';
import { Directive, ElementRef, inject, Input } from '@angular/core';

@Directive({
  selector: '[Fade]',
  standalone: true,
})
export class FadeDirective {
  @Input() durationAnimation!: number; // Cambia el tipo a `number`
  elementRef: ElementRef = inject(ElementRef);
  builder: AnimationBuilder = inject(AnimationBuilder);

  private player!: AnimationPlayer;

  ngOnInit(): void {
    this.player = this.builder
      .build([
        style({ opacity: 0 }),
        animate(
          `${
            this.durationAnimation ? this.durationAnimation : 1.2
          }s ease-in-out`,
          style({ opacity: 1 })
        ),
      ])
      .create(this.elementRef.nativeElement);

    this.player.play();
  }
}
