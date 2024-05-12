import { Component } from '@angular/core';
import * as shared from 'projects/shared-lib/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'first-app';
  jsonString: shared.RuleChecks = { rulecheck: { enable: false } };

  public get loggedIn() {
    return true;
  }

  constructor(private libService: shared.SharedLibService) {}

  onSave(counter: number) {
    let counterNumber: shared.Counter = { counterNumber: counter };
    this.libService.updateCounter(counterNumber);
  }
}
