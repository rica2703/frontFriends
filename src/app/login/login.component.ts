import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username='';
  password='';

  constructor(private router: Router, private authService:AuthService) {}
  onLogin(){
    if(!this.username||!this.password){
      console.log('campos vacios');
      return ;
    }
    this.authService.login(this.username,this.password).subscribe(
      response=>{
        console.log('credenciales correctas');
        
          this.router.navigate(['/feed']);
        
      },
      error=>{
        console.log('error de credenciales:', error);
      }
    )
  }
  
  irACrearCuenta() {
    this.router.navigate(['/crear-cuenta']);
  }
}
