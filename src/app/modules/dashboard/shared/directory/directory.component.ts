import { AppActions } from './../../../app/shared/app.actions';
import { NgRedux } from '@angular-redux/store';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pl-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss']
})
export class DirectoryComponent implements OnInit {

  @Input() node;
  @Input() index;



  constructor(private redux: NgRedux<any>, private appActions: AppActions) { }

  ngOnInit() {
  }
  setDir(dir) {
    this.redux.dispatch(this.appActions.setCurrDirectory(dir));
  }

}
