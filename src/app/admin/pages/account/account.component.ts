import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FadeDirective } from '../../../components/directives/fade/fade.directive';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [RouterLink, FadeDirective],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css',
})
export class AccountComponent {
  canEditInfo: boolean = false;
  textButton: string = 'Editar mi informacion';

  editInfo() {
    this.canEditInfo = !this.canEditInfo;

    if (this.canEditInfo) {
      this.textButton = 'Cancelar';
    } else {
      this.textButton = 'Editar mi informacion';
    }
  }
}
