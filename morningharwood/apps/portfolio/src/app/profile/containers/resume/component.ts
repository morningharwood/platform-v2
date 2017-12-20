import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import * as RouterActions from '../../../router/actions';
export const DECLARE_EXPORT = [];

@Component({
  selector: 'mh-profile-resume',
  templateUrl: './component.html',
  styleUrls: ['./component.scss']
})
export class ResumeContainerComponent {
  constructor(private store:Store<any>, private router: Router) {}
  public back() {
    this.store.dispatch(new RouterActions.Back());
  }

}
