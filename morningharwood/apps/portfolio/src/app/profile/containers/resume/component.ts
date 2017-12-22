import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as RouterActions from '../../../router/actions';

@Component({
  selector: 'mh-resume-profile',
  templateUrl: './component.html',
  styleUrls: ['./component.scss']
})
export class ResumeContainerComponent {
  constructor(private store:Store<any>) {}
  public back() {
    this.store.dispatch(new RouterActions.Back());
  }
  public go(path) {
    this.store.dispatch(new RouterActions.Go({path: [path]}));
  }
}
