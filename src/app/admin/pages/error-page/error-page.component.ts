import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-error-page',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './error-page.component.html',
  styleUrl: './error-page.component.css'
})
export default class ErrorPageComponent {

}
