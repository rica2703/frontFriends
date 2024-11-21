import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://98.84.223.55/api/auth'; // Cambia esto según tu configuración

  constructor(private http: HttpClient) {}

  /**
   * Obtiene el perfil del usuario por username.
   * @param username Nombre de usuario.
   */
  getUserProfile(username: string): Observable<any> {
    console.log('verificando el username en perfil', username);
    return this.http.get<any>(`${this.apiUrl}/user/${username}`);
  }

  /**
   * Obtiene las publicaciones de un usuario específico.
   * @param username Nombre de usuario.
   */
  getUserPosts(username: string): Observable<any[]> {
    console.log('entro',username)
    return this.http.get<any[]>(`${this.apiUrl}/Posts?username=${username}`); // Corrige aquí el endpoint
  }

  /**
   * Elimina un post por su ID.
   * @param postId ID del post a eliminar.
   */
  deletePost(postId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deletePost/${postId}`);
  }

  /**
   * Edita un post existente.
   * @param postId ID del post a editar.
   * @param postData Datos del post actualizado.
   */
  editPost(postId: string, postData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/editPost/${postId}`, postData);
  }
}
