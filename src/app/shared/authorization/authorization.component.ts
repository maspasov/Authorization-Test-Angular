import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from './authorization.services';
import { StateHelper } from '../services/state.helper';

@Component({
  selector: 'imx-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {
  user = {
    name: 'imx',
    password: 'crx'
  };

  constructor(private authService: AuthService, private stateHelper: StateHelper) { }

  onSignin(form: NgForm) {
    this.authService.signinUser(form.value);
  }

  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      this.stateHelper.goToProtectedState();
    }
  }

}
