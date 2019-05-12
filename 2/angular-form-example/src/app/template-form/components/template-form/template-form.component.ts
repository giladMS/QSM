import {Component, OnInit, ViewChild} from '@angular/core';
import {Signup} from '../../../shared/models/forms.models';
import {langOptions} from '../../../shared/models/forms.consts';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {

  model: Signup = new Signup();
  @ViewChild('f') form: any;
  langs: string[] = langOptions;

  onSubmit() {
    if (this.form.valid) {
      console.log('Form Submitted!');
      this.form.reset();
    }
  }

}
