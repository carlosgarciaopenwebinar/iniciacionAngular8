import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Views/home/home.component';
import { CorreosRecibidosComponent } from './Views/correos-recibidos/correos-recibidos.component';
import { EnviarComponent } from './Views/enviar/enviar.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'mails', component: CorreosRecibidosComponent },
  { path: 'send', component: EnviarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
