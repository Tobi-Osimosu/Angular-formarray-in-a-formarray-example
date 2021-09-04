import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  Renderer2,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AddProductConfigurationsComponent } from './add-product-configurations/add-product-configurations.component';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}

/** Constants used to fill up our data base. */
const FRUITS: string[] = [
  'blueberry',
  'lychee',
  'kiwi',
  'mango',
  'peach',
  'lime',
  'pomegranate',
  'pineapple',
];
const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];

@Component({
  selector: 'app-product-configuration',
  templateUrl: './product-configuration.component.html',
  styleUrls: ['./product-configuration.component.scss'],
})
export class ProductConfigurationComponent implements OnInit, AfterViewInit {
  addVendorForm: FormGroup;
  addPaymentTermsForm: FormGroup;
  activeTab: number = 1;
  allVendorTypes = [];
  allPaymentTerms = [];

  displayedColumns: string[] = ['id', 'name', 'progress', 'actions'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @ViewChildren('tab') allTabs: QueryList<ElementRef>;

  constructor(
    private renderer: Renderer2,
    private fb: FormBuilder,
    public dialog: MatDialog
  ) {
    // Create 100 users
    const users = Array.from({ length: 50 }, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit() {
    this.createAddVendorForm();
    this.createAddPaymentTermsForm();
    // setTimeout(() => {
    //   this.dataSource.sort = this.sort;
    //   this.dataSource.paginator = this.paginator;
    // }, 2000);
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }, 1500);
  }

  createAddVendorForm() {
    this.addVendorForm = this.fb.group({
      vendor_type: [null],
    });
  }

  createAddPaymentTermsForm() {
    this.addPaymentTermsForm = this.fb.group({
      payment_term: [null],
    });
  }

  get addVendorFormControls() {
    return this.addVendorForm.controls;
  }

  get addPaymentTermsFormControls() {
    return this.addPaymentTermsForm.controls;
  }

  selectActiveTab(tab: number, event) {
    this.activeTab = tab;

    this.allTabs.forEach((tabEl) => {
      if (tabEl.nativeElement.classList.contains('active')) {
        this.renderer.removeClass(tabEl.nativeElement, 'active');
      }
    });

    if (event.target.classList.contains('active')) {
      this.renderer.removeClass(event.target, 'active');
    } else {
      this.renderer.addClass(event.target, 'active');
    }

    if (tab === 2) {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }
  }

  addVendorType() {
    this.allVendorTypes.push(this.addVendorForm.value.vendor_type);

    this.addVendorForm.reset();
  }

  removeVendorType(index) {
    this.allVendorTypes = this.allVendorTypes.filter((vendorType, i) => {
      return i !== index;
    });
  }

  search(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onAddProductConfiguartion() {
    const dialogRef = this.dialog.open(AddProductConfigurationsComponent, {
      disableClose: true,
      // autoFocus: false,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  addPaymentTerm() {
    this.allPaymentTerms.push(this.addPaymentTermsForm.value.payment_term);

    this.addPaymentTermsForm.reset();
  }

  removePaymentTerm(index) {
    this.allPaymentTerms = this.allPaymentTerms.filter((paymentTerm, i) => {
      return i !== index;
    });
  }
}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
    ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
    '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 50).toString(),
    fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
  };
}
