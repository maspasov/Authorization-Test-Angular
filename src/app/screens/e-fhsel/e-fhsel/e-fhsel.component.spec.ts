import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EFhselComponent } from './e-fhsel.component';

describe('EFhselComponent', () => {
  let component: EFhselComponent;
  let fixture: ComponentFixture<EFhselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EFhselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EFhselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
