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
    this.loadData({});
  }

  loadData(event: any) {
    console.log(event);
    this.carService.putData(this.searchForm).subscribe(
      (data: any) => {
        this.carService.getData(`${data.headers.get('location')}?page=1&size=100`).subscribe(
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
