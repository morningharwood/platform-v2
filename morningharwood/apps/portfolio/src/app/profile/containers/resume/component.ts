import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as RouterActions from '../../../router/actions';


@Component({
  selector: 'mh-resume-profile',
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
})
export class ResumeContainerComponent {
  public techniques: string[] = [
    'Object Oriented JavaScript',
    'AngularJS',
    'AWS',
    'CSS/SCSS',
    'Vector/DOM',
    'motion graphics',
    'semantic HTML',
    'Typescript',
    'NodeJS',
    'Golang',
    'i18n',
    'a11y',
    'and web workflow',
  ];

  public interests: string[] = [
    'Interaction Design',
    'Fullstack Development',
    'ES Next',
    'CSS4+',
    'Modern Web to Native Workflows',
    'Angular',
    'Industrial Design',
    'Typography',
    'Entrepreneurship',
    'Motion Design',
    'Architecture',
    'Skateboarding',
    'and Guitar'
  ];

  constructor(private store: Store<any>) {
  }

  public back() {
    this.store.dispatch(new RouterActions.Back());
  }

  public go(path) {
    this.store.dispatch(new RouterActions.Go({ path: [path] }));
  }
}
