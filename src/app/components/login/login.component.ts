import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  userName:string = "";
  password:string ="";

  constructor(private authService:AuthService, private router:Router) {
    if(authService.isLogged())
    {
      router.navigate(['']);
    }
  }

  Login()
  {
      if(this.userName!="" || this.password!="")
      {
        this.authService.login(this.userName,this.password).subscribe({
        next: r => this.router.navigate(['']),
        error: e => alert("Credenziali non valide")
        });
      }
  }
}
