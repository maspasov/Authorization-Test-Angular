import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'imx-e-fhsel',
  templateUrl: './e-fhsel.component.html',
  styleUrls: ['./e-fhsel.component.css']
})
export class EFhselComponent implements OnInit {
  searchForm = {};

  constructor() {
  }

  ngOnInit() {
  }

  doSearch() {
    console.log(this.searchForm);
  }
}
