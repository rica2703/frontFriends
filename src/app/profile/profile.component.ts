// import { Component, OnInit } from '@angular/core';
// import { AuthService } from './auth.service';

// @Component({
//   selector: 'app-profile',
//   templateUrl: './profile.component.html',
//   styleUrls: ['./profile.component.css'] // Cambiado de "styleUrl" a "styleUrls"
// })
// export class ProfileComponent implements OnInit {
//   userProfile: any = {};
//   userPosts: any[] = [];
//   username: string = '';

//   constructor(private authService: AuthService) {}

//   ngOnInit(): void {
//     const storedUsername = localStorage.getItem('username');
//     if (storedUsername) {
//       this.username = storedUsername;
//       this.getUserProfile(this.username);
//       this.getUserPosts(this.username);
//       console.log('verificando username en component',this.username)
//     } else {
//       console.error('No username found in localStorage');
//     }
//   }

//   getUserProfile(username: string): void {
//     this.authService.getUserProfile(username).subscribe(
//       (response) => {
//         this.userProfile = response;
//         console.log('Perfil del usuario:', this.userProfile);
//       },
//       (error) => {
//         console.error('Error al obtener el perfil del usuario:', error);
//       }
//     );
//   }

//   getUserPosts(username: string): void {
//     this.authService.getUserPosts(username).subscribe(
//       (response) => {
//         this.userPosts = response;
//         console.log('Publicaciones del usuario:', this.userPosts);
//       },
//       (error) => {
//         console.error('Error al obtener las publicaciones del usuario:', error);
//       }
//     );
//   }

//   editPost(postId: string): void {
//     console.log('Editar post con ID:', postId);
//     // Implementar lógica para editar el post
//   }

//   deletePost(postId: string): void {
//     this.authService.deletePost(postId).subscribe(
//       () => {
//         this.userPosts = this.userPosts.filter((post) => post._id !== postId);
//         console.log('Post eliminado');
//       },
//       (error) => {
//         console.error('Error al eliminar el post:', error);
//       }
//     );
//   }
// }
import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'], // Cambiado de "styleUrl" a "styleUrls"
})
export class ProfileComponent implements OnInit {
  userProfile: any = {};
  userPosts: any[] = [];
  username: string = '';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    // Obtener el objeto completo del localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        // Parsear el JSON y obtener el username
        const userObj = JSON.parse(storedUser);
        if (userObj && userObj.username) {
          this.username = userObj.username;
          console.log('Username obtenido del localStorage:', this.username);
          this.getUserProfile(this.username);
          this.getUserPosts(this.username);
        } else {
          console.error('Username no encontrado en el objeto de localStorage');
        }
      } catch (error) {
        console.error('Error al parsear el objeto del localStorage:', error);
      }
    } else {
      console.error('No se encontró el objeto "user" en localStorage');
    }
  }

  getUserProfile(username: string): void {
    this.authService.getUserProfile(username).subscribe(
      (response) => {
        this.userProfile = response;
        console.log('Perfil del usuario:', this.userProfile);
      },
      (error) => {
        console.error('Error al obtener el perfil del usuario:', error);
      }
    );
  }

  getUserPosts(username: string): void {
    this.authService.getUserPosts(username).subscribe(
      (response) => {
        this.userPosts = response;
        console.log('Publicaciones del usuario:', this.userPosts);
      },
      (error) => {
        console.error('Error al obtener las publicaciones del usuario:', error);
      }
    );
  }

  editPost(postId: string): void {
    console.log('Editar post con ID:', postId);
    // Implementar lógica para editar el post
  }

  deletePost(postId: string): void {
    this.authService.deletePost(postId).subscribe(
      () => {
        this.userPosts = this.userPosts.filter((post) => post._id !== postId);
        console.log('Post eliminado');
      },
      (error) => {
        console.error('Error al eliminar el post:', error);
      }
    );
  }
}
