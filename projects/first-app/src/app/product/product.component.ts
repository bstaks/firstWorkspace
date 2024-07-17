import { Component } from '@angular/core';
import { MaterialModule } from '../Customer/material.module';

@Component({
  standalone: true,
  selector: 'app-product',
  templateUrl: './product.component.html',

  imports: [MaterialModule],
})
export class ProductComponent {}
