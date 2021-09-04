import { Component, OnInit, Inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromApp from '../../../../@core/stores/app.reducer';
import * as DashboardActions from '../../../../@core/stores/dashboard/dashboard.actions';
import * as dashboardSelectors from '../../../../@core/stores/dashboard/dashboard.selectors';
@Component({
  selector: 'app-add-product-configurations',
  templateUrl: './add-product-configurations.component.html',
  styleUrls: ['./add-product-configurations.component.scss']
})
export class AddProductConfigurationsComponent implements OnInit {
  addProductConfigurationsForm: FormGroup;
  productConfigurationArray: FormArray;

  constructor(
    // @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<AddProductConfigurationsComponent>,
    private fb: FormBuilder,
    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit() {

    this.addProductConfigurationsForm = this.fb.group({
      product_configuration: this.fb.array([this.createProductConfiguration()]),
    });

    this.productConfigurationArray = this.addProductConfigurationsForm.get('product_configuration') as FormArray;

  }

  closeDialog() {
    this.dialogRef.close();
  }

  createProductConfiguration(): FormGroup {
    return this.fb.group({
      audit: [null, [Validators.required]],
      vendor_type: [null, [Validators.required]],
    });
  }

  pushProductConfiguration() {
    this.productConfigurationArray = this.addProductConfigurationsForm.get('product_configuration') as FormArray;
    this.productConfigurationArray.push(this.createProductConfiguration());
  }

  popProductConfiguration(index: number) {
    this.productConfigurationArray = this.addProductConfigurationsForm.get('product_configuration') as FormArray;
    this.productConfigurationArray.removeAt(index);
  }

  onSubmit() {
    // let result: { zone_name: string; region_id: number }[] = this.addProductConfigurationsForm
    //   .value.zone;

    // let zoneDictionary = new Map();

    // this.addProductConfigurationsForm.value.zone.forEach(
    //   (item: { zone_name: string; region_id: number }, index) => {
    //     zoneDictionary.set(item.zone_name, item.region_id);
    //   }
    // );

    console.log()

    this.closeDialog();
  }
}
