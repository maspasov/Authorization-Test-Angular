import {Component, OnInit, Input} from '@angular/core';

import {EFhselService} from '../e-fhsel.service';
import {Adaptor} from './Adaptor';

@Component({
  selector: 'imx-e-fhsel',
  templateUrl: './e-fhsel.component.html',
  styleUrls: ['./e-fhsel.component.css']
})
export class EFhselComponent implements OnInit {
  @Input() searchForm: any = {caseRef: '15'};
  search: any;
  isRequired = true;
  requiredFields = [
    'extCaseRef',
    'clientCaseRef',
    'caseRef',
    'extIndividualRef',
    'individualRef',
    'legalId',
    'birthDate',
    'phone',
    'postCode',
    'email',
    'bankAccNum'
  ];
  mapping: any = {
    'caseRef': 'filterRefdoss',
    'extCaseRef': 'filterAncredoss',
    'parentCaseId': 'filterParentCaseId',
    'displayCaseCateg': 'filterDisplayCaseCateg',
    'currency': 'filterCaseCurr',
    'party1Name': 'filterClientName',
    'party2Name': 'filterDebtorName',
  };

  constructor(private carService: EFhselService) {
  }

  ngOnInit() {
  }

  doSearch() {
    this.loadData({});
  }

  doReset() {
    this.searchForm = {};
  }

  loadData(event: any) {
    const adaptor = new Adaptor(event, this.mapping, this.searchForm);
    this.carService.putData(adaptor.mapping()).subscribe(
      (data: any) => {
        adaptor.setLocation(data.headers.get('location'));
        this.carService.getData(adaptor.url()).subscribe(
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
