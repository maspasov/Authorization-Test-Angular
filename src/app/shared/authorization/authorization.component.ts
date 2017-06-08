import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { AuthService } from './authorization.services';
import { StateHelper } from '../services/state.helper';

@Component({
  selector: 'imx-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {
  myForm: FormGroup;
  error = false;
  errorMessage = '';

  constructor(private fb: FormBuilder, private authService: AuthService, private stateHelper: StateHelper) { }

  onSignin() {
    this.authService.signinUser(this.myForm.value);
  }

  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      this.stateHelper.goToProtectedState();
    }

    this.myForm = this.fb.group({
      name: ['imx', Validators.required],
      password: ['crx', Validators.required],
    });
  }

}
