import { Component } from '@angular/core';
import { InfoPageService } from '../../services/info-page.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(public _infoPage: InfoPageService, private router: Router) {}

  buscarProducto(termino: string) {
    if (termino.length < 1) {
      return;
    }

    this.router.navigate(['/search', termino]);
  }
}
