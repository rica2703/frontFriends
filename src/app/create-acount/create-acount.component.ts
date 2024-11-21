import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-acount',
  templateUrl: './create-acount.component.html',
  styleUrl: './create-acount.component.css'
})
export class CreateAcountComponent {
 nombreImg:String='crearCuenta/av1.png';
  
  user={
    username:'',
    nombre:'',
    password:'',
    estado:false,
    avatar:this.nombreImg,
  }
  constructor (private router:Router, private authservice:AuthService){}
  onSignin(){
    this.router.navigate(['/login']);
  }
  av1(){
    this.nombreImg='crearCuenta/av1.png';
    this.user.avatar=this.nombreImg;
  }
  av2(){
    this.nombreImg='crearCuenta/av2.png';
    this.user.avatar=this.nombreImg;
  }
  av3(){
    this.nombreImg='crearCuenta/av3.png';
    this.user.avatar=this.nombreImg;
  }
  av4(){
    this.nombreImg='crearCuenta/av4.png';
    this.user.avatar=this.nombreImg;
  }
  av5(){
    this.nombreImg='crearCuenta/av5.png';
    this.user.avatar=this.nombreImg;
  }
  av6(){
    this.nombreImg='crearCuenta/av6.png';
    this.user.avatar=this.nombreImg;
  }
  onSignup(){
    this.authservice.signup(this.user).subscribe(
      response=>{
        console.log('user register succefully');
    this.router.navigate(['/login']);
      },
      error=>{
        console.log('erro:',error);
      }
    )
  }
}
