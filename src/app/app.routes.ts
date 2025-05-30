import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BookdetailComponent } from './components/bookdetail/bookdetail.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { NewbookComponent } from './components/newbook/newbook.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
    {path:'',component:HomeComponent, canActivate:[AuthGuard]},
    {path:'login',component:LoginComponent},
    {path:'libri/nuovo', component:NewbookComponent, canActivate:[AuthGuard]},
    {path:'libri/:id', component:BookdetailComponent, canActivate:[AuthGuard]},
    {path: '**', component: NotfoundComponent}
];
