import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewContractConfigurationComponent } from './view-contract-configuration.component';

describe('ViewContractConfigurationComponent', () => {
  let component: ViewContractConfigurationComponent;
  let fixture: ComponentFixture<ViewContractConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewContractConfigurationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewContractConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
