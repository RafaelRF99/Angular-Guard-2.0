import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthMockService } from 'src/app/services/auth-mock.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private service: AuthMockService, private router: Router) {}

  login() {
    this.service.handleLogin();
    this.router.navigate(['/commun']);
  }
}
