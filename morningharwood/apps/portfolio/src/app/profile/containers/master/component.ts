import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as RouterActions from '../../../router/actions';
import { Router } from '@angular/router';

export const DECLARE_EXPORT = [];

@Component({
  selector: 'mh-profile-master',
  templateUrl: './component.html',
  styleUrls: ['./component.scss']
})
export class MasterContainerComponent {
  constructor(private store:Store<any>, private router:Router) {}
  public go() {
    // this.router.navigate([]);
    this.store.dispatch(new RouterActions.Go({
      path: ['/profile/resume'],
    }));
  }
}

