import { Subject } from 'rxjs/Subject';
import { select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'pl-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

// tslint:disable-next-line:label-position
export class DashboardComponent implements OnInit {

  nodesSubscription: Subscription;
  @select(['app', 'app',]) app$: Subject<any>;
  data;

  constructor() { }

  ngOnInit() {
    this.nodesSubscription = this.app$.subscribe(res => {
      this.data = res.toJS();
    });
  };
  createFolder() {

  }
}
