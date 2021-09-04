import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductConfigurationsComponent } from './add-product-configurations.component';

describe('AddProductConfigurationsComponent', () => {
  let component: AddProductConfigurationsComponent;
  let fixture: ComponentFixture<AddProductConfigurationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProductConfigurationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductConfigurationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
