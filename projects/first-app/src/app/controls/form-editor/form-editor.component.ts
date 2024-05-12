import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form-editor',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-editor.component.html',
  styleUrl: './form-editor.component.scss',
})
export class FormEditorComponent implements OnInit {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

  @Input()
  formFields: FormEditorControl[] = [];

  formEditorGroup!: UntypedFormGroup;
  controls = [];
  constructor(private fb: FormBuilder) {}
  public ngOnInit(): void {
    this.formEditorGroup = this.fb.group({});
    // this.formFields.forEach((x) => {
    //   const fromCtl = new FormControl(x.name);
    //   // this.formEditorGroup
    // });

    this.formFields.forEach((field) => {
      let validators = [];
      if (field.pattern) {
        validators.push(Validators.required);
      }
      this.formEditorGroup.addControl(
        field.name,
        this.fb.control('', validators)
      );
    });
  }
}

export enum ControlType {
  Text,
  Dropdown,
  MultiSelectDropdown,
  Checkbox,
  RadioButton,
}

export interface FormEditorControl {
  control: ControlType;
  name: string;
  pattern?: string;
}
