import { Component } from '@angular/core';
import {formTypeOptions} from './shared/models/forms.consts';
import {eFormTypes} from './shared/models/forms.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-forms';

  // Handaling Select options Input
  public formTypes = eFormTypes; // Save to public var - to be use in template
  public formOptions = formTypeOptions; // init public var
  public selectedFormOption: string = null; // init public var

  public selectFormType(selectedEv) {
    const selectedVal = selectedEv.target.value;
    const val = +selectedVal;
    console.log(`selectedVal: ${selectedVal}, selectedVal as number: ${val}, TemplateFormType: ${this.formTypes.Template}`);
    console.log(selectedVal === this.formTypes.Template);
  }

  // public selectFormType(selectedEv: Event) {
  //   const selectedVal = (selectedEv.target as HTMLInputElement).value;
  //   const val = +selectedVal;
  //   console.log(`selectedVal: ${selectedVal}, selectedVal as number: ${val}, TemplateFormType: ${this.formTypes.Template}`);
  //   console.log(selectedVal === this.formTypes.Template);
  // }
}
