// import { Component } from '@angular/core';
// import { AuthService } from './auth.service';
// import { OnInit } from '@angular/core';
// @Component({
//   selector: 'app-feed',
//   templateUrl: './feed.component.html',
//   styleUrl: './feed.component.css'
// })
// export class FeedComponent {
//   posts: any[] = [];
//   texto=''
// user:any;
// constructor (private authService:AuthService){}
// ngOnInit(){
//   this.user=this.authService.getUserData();
//   console.log('Datos del usuario:', this.user);
// }
// onPost(){
//   this.authService.publicar(this.user.username, this.texto).subscribe(
//     response => {
//       // alert("publicado con exito")
//       console.log('Publicado con éxito:', response);
//       // Aquí puedes redirigir al usuario o almacenar el token
//     },
//     error => {
//       console.error('Error de publicacion:', error);
//     }
//   );
//   // console.log("el usuario que publico es",this.user.username)
// }
// }
import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  posts: any[] = [];
  activeUsers: any[] = [];
  texto = '';
  user: any;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.user = this.authService.getUserData(); // Obtén los datos del usuario desde el localStorage
    console.log('Datos del usuario:', this.user);
    this.getPosts(); // Llama al método para obtener publicaciones al inicializar el componente
    this.loadActiveUsers();
  }

  // Método para obtener las publicaciones
  getPosts(): void {
    this.authService.getPosts().subscribe(
      (response) => {
        console.log('Publicaciones obtenidas:', response);
        this.posts = response; // Asigna las publicaciones a la variable posts
        this.posts.forEach(post => {
          this.authService.getUserByUsername(post.username).subscribe(
            userResponse => {
              // Asignamos el avatar del usuario a la publicación
              console.log('se busco', userResponse.avatar);
              post.avatar = userResponse.avatar;
            })
        });
      },
      (error) => {
        console.error('Error al obtener publicaciones:', error);
      }
    );
  }
  loadActiveUsers() {
    this.authService.getUsersActive().subscribe(
      (users) => {
        this.activeUsers = users;
        console.log('Usuarios activos:', this.activeUsers);
      },
      (error) => {
        console.error('Error al obtener usuarios activos:', error);
      }
    );
  }
  // Método para crear una nueva publicación
  onPost() {
    if (this.texto.trim() === '') {
      alert('Por favor, ingrese un texto para publicar.');
      return;
    }

    this.authService.publicar(this.user.username, this.texto).subscribe(
      (response) => {
        console.log('Publicado con éxito:', response);
        this.texto = ''; // Limpiar el campo de texto
        this.getPosts(); // Recargar las publicaciones después de publicar una nueva
      },
      (error) => {
        console.error('Error de publicación:', error);
      }
    );
  }
}

