import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-inventory',
  standalone: true,
  imports: [],
  templateUrl: './card-inventory.component.html',
  styleUrl: './card-inventory.component.css'
})
export class CardInventoryComponent {

  @Input() title!: string;
  @Input() author!: string;
  @Input() loans!: string;
  @Input() stock!: string;
}
