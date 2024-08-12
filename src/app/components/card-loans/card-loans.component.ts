import { Component, Input } from '@angular/core';
import { LoanResponse } from '../../interfaces/loan';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-card-loans',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './card-loans.component.html',
  styleUrl: './card-loans.component.css'
})
export class CardLoansComponent {
  @Input() loan!: LoanResponse;
}
