import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContractConfigurationComponent } from './add-contract-configuration.component';

describe('AddContractConfigurationComponent', () => {
  let component: AddContractConfigurationComponent;
  let fixture: ComponentFixture<AddContractConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddContractConfigurationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddContractConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
