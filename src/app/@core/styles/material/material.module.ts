import {
  NgModule,
  NO_ERRORS_SCHEMA,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatRippleModule } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
// import { MatMomentDateModule } from '@angular/material-moment-adapter';
// import {
//   MomentDateModule,
//   MomentDateAdapter,
// } from '@angular/material-moment-adapter';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import {
  DateAdapter,
  MAT_DATE_LOCALE,
  MAT_DATE_FORMATS,
} from '@angular/material/core';

// export const RUBY_DATE_FORMATS = {
//   parse: {
//     dateInput: 'DD/MM/YYYY',
//   },
//   display: {
//     dateInput: 'DD/MM/YYYY',
//     monthYearLabel: 'MMMM YYYY',
//     dateA11yLabel: 'LL',
//     monthYearA11yLabel: 'MMMM YYYY',
//   },
// };

const material = [
  MatButtonModule,
  MatStepperModule,
  MatInputModule,
  MatIconModule,
  MatCheckboxModule,
  MatSelectModule,
  MatRippleModule,
  MatTabsModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatTooltipModule,
  MatSlideToggleModule,
  MatDialogModule,
  MatDatepickerModule,
  // MatMomentDateModule,
  MatNativeDateModule,
  MatSnackBarModule,
  MatMenuModule,
  MatRadioModule,
];

@NgModule({
  imports: [material],
  exports: [material],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    // MatDatepickerModule,
    // MatMomentDateModule,
    // MomentDateModule,
    // MatNativeDateModule,
    // {
    //   provide: DateAdapter,
    //   useClass: MomentDateAdapter,
    //   deps: [MAT_DATE_LOCALE],
    // },
    // { provide: MAT_DATE_FORMATS, useValue: RUBY_DATE_FORMATS },
  ],
})
export class MaterialModule {}
