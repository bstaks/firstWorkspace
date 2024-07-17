import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone: true,
  imports: [],
})
export class AboutComponent {
  title: string = 'About';
  description: string = 'This is about page';
}
