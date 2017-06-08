import {Component, OnInit} from '@angular/core';

import {EFhselService} from '../e-fhsel.service';

@Component({
  selector: 'imx-e-fhsel',
  templateUrl: './e-fhsel.component.html',
  styleUrls: ['./e-fhsel.component.css']
})
export class EFhselComponent implements OnInit {
  searchForm = {caseRef: '15%'};
  search: any;
  mapping: FilterParameters;

  constructor(private carService: EFhselService) {
    this.mapping = {
      key: 'caseRef',
      value: 'filterRefdoss'
    };
  }

  ngOnInit() {
  }

  doSearch() {
    console.log(this.searchForm);
    this.loadData({});
  }

  loadData(event: any) {
    this.carService.putData(this.searchForm).subscribe(
      (data: any) => {
        let url = new Adaptor(event, data.headers.get('location'), this.mapping).url();
        console.log(url);
        this.carService.getData(url).subscribe(
          (result: any) => {
            this.search = result.content;
          },
          (error) => console.log(error)
        );
      },
      (error) => console.log(error)
    );
  }
}

interface FilterParameters {
  key: string;
  value: string;
}

class Adaptor {
  searchString = '';

  constructor(private query: any, private location: string, private filter?: FilterParameters) {
    this.searchString = location;
  }

  url() {
    console.log(this.query);
    this.paging().mapping().sort();
    return this.searchString;
  }

  paging() {
    this.searchString += `?page=${this.query.first !== 0 ? (this.query.first / this.query.rows) : 1}&size=${100}`;
    return this;
  }

  mapping() {
    console.log(this.filter);
    if (this.filter) {
      for (const subkey of Object.keys(this.query.filters)) {
        this.searchString += `&${this.filter[subkey]}=${this.query.filters[subkey].value}`;
      }
    } else {
      for (const subkey of Object.keys(this.query.filters)) {
        this.searchString += `&${subkey}=${this.query.filters[subkey].value}`;
      }
    }
    return this;
  }

  sort() {
    if (this.query.sortField != null) {
      this.searchString += (`&sort=${this.query.sortField},${this.query.sortOrder === 1 ? 'asc' : 'desc'}`);
    }
  }
}
