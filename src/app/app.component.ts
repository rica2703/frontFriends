import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './create-acount/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Friends';
  
  constructor(private router: Router) {}

  irACrearCuenta() {
    this.router.navigate(['/crear-cuenta']);
  }

}
