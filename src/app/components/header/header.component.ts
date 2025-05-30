import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  nome:string;

  constructor(private authService:AuthService, private router:Router) {
    this.nome=authService.getNameFromToken();
  }

  Logout()
  {
    this.authService.logout().subscribe( r => this.router.navigate(['login']));
  }
}
