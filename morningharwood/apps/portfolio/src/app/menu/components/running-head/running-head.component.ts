import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ViewEncapsulation,
} from '@angular/core';
import { Item } from './running-head.content';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'mh-running-head',
  templateUrl: 'running-head.component.html',
  styleUrls: [
    'running-head.component.scss',
  ],

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RunningHeadComponent {
  @Input() state: Observable<Item>;
}
