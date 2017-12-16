import { AppActions } from './shared/app.actions';
import { Component, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(private vcr: ViewContainerRef, private appActions: AppActions) { }

  ngOnInit() {
    this.appActions.setToastrViewContainerRef(this.vcr);
  }
}
