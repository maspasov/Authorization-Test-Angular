import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/authorization/authorization.services'; // TODO remove

@Component({
  selector: 'imx-e-fhsel',
  templateUrl: './e-fhsel.component.html',
  styleUrls: ['./e-fhsel.component.css']
})
export class EFhselComponent implements OnInit {
  searchForm = {};

  constructor(private authService: AuthService) {
    this.authService.signinUser(); // TODO remove
  }

  ngOnInit() {
  }

  doSearch() {
    console.log(this.searchForm);
  }
}
