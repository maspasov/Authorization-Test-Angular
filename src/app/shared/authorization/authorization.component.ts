import { Component, OnInit } from '@angular/core';
import { AuthService } from './authorization.services';
import { StateHelper } from '../services/state.helper';

@Component({
  selector: 'imx-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {

  constructor(private authService: AuthService, private stateHelper: StateHelper) {

  }

  ngOnInit() {
    if(this.authService.isAuthenticated()) {
      this.stateHelper.goToProtectedState();
    }
  }
}
