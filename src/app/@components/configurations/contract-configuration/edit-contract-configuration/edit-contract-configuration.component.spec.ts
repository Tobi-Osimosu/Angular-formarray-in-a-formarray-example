import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditContractConfigurationComponent } from './edit-contract-configuration.component';

describe('EditContractConfigurationComponent', () => {
  let component: EditContractConfigurationComponent;
  let fixture: ComponentFixture<EditContractConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditContractConfigurationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditContractConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
