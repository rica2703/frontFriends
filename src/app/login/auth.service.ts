import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl='http://98.84.223.55/api/auth/signin';

  constructor(private http: HttpClient) { }
  login(username:String,password:String):Observable<any>{
    const headers=new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post<any>(`${this.apiUrl}`,{username,password},{headers}).pipe(tap((response)=>{
      console.log('respuesta api: ',response)
      localStorage.setItem('user', JSON.stringify(response)); // Almacena la información del usuario
    }));
  }
}


// getUser
// getUserData() {
//     const userData = localStorage.getItem('user');
//     return userData ? JSON.parse(userData) : null; // Devuelve el objeto del usuario si existe
//   }

//   // Método para eliminar los datos del usuario del localStorage (cerrar sesión)
//   logout() {
    
 
// localStorage.removeItem('user');
//   }