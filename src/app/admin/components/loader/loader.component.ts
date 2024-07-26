import { Component, inject } from '@angular/core';
import { LoaderService } from '../../../core/services/loaderService/loader.service';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.css',
})
export class LoaderComponent {
  private readonly loaderService: LoaderService = inject(LoaderService);
  isLoading = this.loaderService.isLoading;

}
