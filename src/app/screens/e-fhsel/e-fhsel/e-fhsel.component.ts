import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/authorization/authorization.services';

@Component({
  selector: 'imx-e-fhsel',
  templateUrl: './e-fhsel.component.html',
  styleUrls: ['./e-fhsel.component.css']
})
export class EFhselComponent implements OnInit {

  constructor(private authService: AuthService) {
    // TODO
    // this.authService.signinUser();
  }

  ngOnInit() {
  }

}
