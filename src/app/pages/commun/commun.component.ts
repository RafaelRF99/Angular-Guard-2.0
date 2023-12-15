import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthMockService } from 'src/app/services/auth-mock.service';

@Component({
  selector: 'app-commun',
  templateUrl: './commun.component.html',
  styleUrls: ['./commun.component.scss'],
})
export class CommunComponent {
  constructor(private service: AuthMockService, private router: Router) {}

  logout() {
    this.service.handleLogout();
    this.router.navigate(['/']);
  }
}
