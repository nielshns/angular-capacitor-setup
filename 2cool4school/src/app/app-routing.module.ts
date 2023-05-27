import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './xyz/login/login.component';

const routes: Routes = [
{path: '', component: LoginComponent},
{path: 'login', component: LoginComponent},
{path : dashboard, component: DashboardComponent},]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
