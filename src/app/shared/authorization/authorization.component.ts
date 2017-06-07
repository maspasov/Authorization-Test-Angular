import { Component, OnInit } from '@angular/core';
import { AuthService } from './authorization.services';

@Component({
  selector: 'imx-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {

  constructor(private authService: AuthService) {
    this.authService.signinUser();
  }

  ngOnInit() {
  }

}
