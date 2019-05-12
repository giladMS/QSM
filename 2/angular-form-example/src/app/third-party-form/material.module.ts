import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatTabsModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatMenuModule,
  MatRadioModule,
  MatCheckboxModule,
  MatCardModule,
  MatGridListModule,
  MatSelectModule,
  MatPaginatorModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatProgressSpinnerModule,
  MatExpansionModule,
  MatAutocompleteModule,
  MatSlideToggleModule,
  MatSliderModule,
  MatProgressBarModule,
  MatChipsModule,
  MatButtonToggleModule,
  MatStepperModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatTableModule,
  MatSortModule,
  MatIconRegistry,

} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import {CdkTableModule} from '@angular/cdk/table';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const MODULES = [

  // Navigation.
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,

  // Layout
  MatListModule,
  MatGridListModule,
  MatExpansionModule,
  MatCardModule,
  MatTabsModule,
  MatStepperModule,

  // Buttons & Indicators
  MatButtonModule,
  MatButtonToggleModule,
  MatChipsModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,

  // Form Controls.
  MatCheckboxModule,
  MatInputModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatAutocompleteModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSelectModule,

  // Popups & Modals
  MatDialogModule,
  MatTooltipModule,
  MatSnackBarModule,


  // Table
  CdkTableModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,

  BrowserAnimationsModule
];

@NgModule({
  imports: [
    MODULES
  ],
  exports: [
    MODULES
  ],
  declarations: [],
  providers: [
    MatDatepickerModule,
    MatIconRegistry

  ]
})
export class MaterialModule {
}
