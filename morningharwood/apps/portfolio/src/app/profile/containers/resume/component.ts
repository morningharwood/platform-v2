import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as RouterActions from '../../../router/actions';
import { ResumeBlock } from './interfaces/index';
import * as content from './content/data';

@Component({
  selector: 'mh-resume-profile',
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
})
export class ResumeContainerComponent {
  public me = content.me;
  public experiences: ResumeBlock[] = content.experiences;
  public educations: ResumeBlock[] = content.educations;
  public awards: any = content.awards;
  public techniques: string[] = content.techniques;
  public socials = content.socials;
  public interests: string[] = content.interests;
  public inspiration = content.inspiration;

  constructor(private store: Store<any>) {
  }

  public back() {
    this.store.dispatch(new RouterActions.Back());
  }

  public go(path) {
    this.store.dispatch(new RouterActions.Go({ path: [path] }));
  }
}
