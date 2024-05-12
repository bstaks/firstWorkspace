import { Injectable } from '@angular/core';
import {
  ControlType,
  FormEditorControl,
} from '../controls/form-editor/form-editor.component';

@Injectable({
  providedIn: 'root',
})
export class MerchantField {
  public controls: FormEditorControl[] = [
    { control: ControlType.Checkbox, name: 'male' },
    { control: ControlType.Text, name: 'name' },
    { control: ControlType.Checkbox, name: 'email' },
  ];

  constructor() {}

  public getControls(name: string): FormEditorControl {
    return this.controls.find((control) => control.name === name)!;
  }
}
