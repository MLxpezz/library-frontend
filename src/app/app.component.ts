import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private router: Router) {}

  searchButton: string = "assets/icons8-search-book-48 1.png";

  shouldShowHeader(): boolean {
    const noHeaderRoutes = ["/login"];
    return !noHeaderRoutes.includes(this.router.url);
  }
}
