import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreateAcountComponent } from './create-acount/create-acount.component';
import { FeedComponent } from './feed/feed.component';
import { ProfileComponent } from './profile/profile.component';
const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'crear-cuenta',component:CreateAcountComponent},
  {path:'feed',component:FeedComponent},
  {path:'profile',component:ProfileComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirige al inicio por defecto
  { path: '**', redirectTo: '/login' } // Manejo de rutas no encontradas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
