import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from './material.module';
import {MaterialFormComponent} from './components/matirial-form/material-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [MaterialFormComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    MaterialFormComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ThirdPartyFormModule { }
