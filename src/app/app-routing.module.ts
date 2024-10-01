import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ListeComponent } from './liste/liste.component';
import { ChoixComponent } from './choix/choix.component';
import { OffreComponent } from './offre/offre.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'signUp',component:SignUpComponent},
  {path:'signIn',component:SignInComponent},
  {path:'choix', component:ChoixComponent},
  {path:'liste',component:ListeComponent},
  {path:'offre',component:OffreComponent}
  


  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
