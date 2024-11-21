import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://98.84.223.55/api/auth/signup'; 

  constructor(private http: HttpClient) {}

  signup(userData: {username:String,nombre:String,password:String,estado:boolean,avatar:String}): Observable<any> {
    return this.http.post(`${this.apiUrl}`, userData);
  }
}
