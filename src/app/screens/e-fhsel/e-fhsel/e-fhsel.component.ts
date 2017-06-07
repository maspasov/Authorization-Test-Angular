import {Component, OnInit} from '@angular/core';
import {EFhselService} from '../e-fhsel.service';

@Component({
  selector: 'imx-e-fhsel',
  templateUrl: './e-fhsel.component.html',
  styleUrls: ['./e-fhsel.component.css']
})
export class EFhselComponent implements OnInit {
  searchForm = {caseRef: "15%"};
  search: any;

  constructor(private carService: EFhselService) {
  }

  ngOnInit() {
  }

  doSearch() {
    console.log(this.searchForm);
  }

  loadData(event: any) {
    console.log(event);
    this.carService.getCarsSmall()
      .subscribe(
        (data: any) => this.search = data,
        (error) => console.log(error)
      );
  }
}
