import {Component, OnInit, ViewChild} from '@angular/core';
import {Signup} from '../../../shared/models/forms.models';
import {langOptions} from '../../../shared/models/forms.consts';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  public form: FormGroup;
  langs: string[] = langOptions;

  onSubmit() {
    if (this.form.valid) {
      console.log('Form Value ', this.form.value);
      console.log('Form Submitted!');
      this.form.reset();
    }
  }

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    const initialFormData = new Signup();
    this.form = new FormGroup({
      firstName: new FormControl(initialFormData.firstName, Validators.required),
      lastName:  new FormControl(initialFormData.lastName, Validators.required),
      email:  new FormControl(initialFormData.email, Validators.required), // can be added here or in html - Validators.pattern(/[^ @]*@[^ @]*'/g)
      password: new FormControl(initialFormData.password, [Validators.required, Validators.minLength(8)]),
      language: new FormControl(initialFormData.language),
  });
  }

}
