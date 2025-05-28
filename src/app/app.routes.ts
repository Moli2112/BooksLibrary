import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BookdetailComponent } from './components/bookdetail/bookdetail.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { NewbookComponent } from './components/newbook/newbook.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'libri/nuovo', component:NewbookComponent},
    {path:'libri/:id', component:BookdetailComponent},
    {path: '**', component: NotfoundComponent}
];
