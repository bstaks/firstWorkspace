import { Component } from '@angular/core';
import { MainComponent } from '../Customer/main/main.component'; // Import the MainComponent

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [MainComponent],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss',
})
export class CustomerComponent {}
