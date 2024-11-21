import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://98.84.223.55/api/auth/createPost'; 
  private apiUrlGet = 'http://98.84.223.55/api/auth/Posts'; 
  private apiUrlGetUsers='http://98.84.223.55/api/auth/user/';
  private apiUrlGetUsersActive='http://98.84.223.55/api/auth/users/active';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any> {
    return this.http.get<any>(`${this.apiUrlGet}`);
  }
  getUserByUsername(username:String):Observable<any>{
    return this.http.get<any>(`${this.apiUrlGetUsers}${username}`);
  }
  getUsersActive(): Observable<any> {
    return this.http.get<any>(`${this.apiUrlGetUsersActive}`);
  }
  getUserData() {
    const userData = localStorage.getItem('user');
    try{
      return userData ? JSON.parse(userData) : null;
    }
    catch(error){
      console.log('error al parsear datos');
      return null;
    }
  }
  
  publicar(username: string, texto: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(`${this.apiUrl}`, { username, texto }, { headers });
  }
}
