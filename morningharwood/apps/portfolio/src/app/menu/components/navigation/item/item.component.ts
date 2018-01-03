import {
  Component,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Item } from './item.interface';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { materialDesignCurve } from '../../../../_animations/material-design';
import * as RouterActions from "../../../../router/actions";
import {Store} from "@ngrx/store";

// TODO refactor to button and use HostListener
@Component({
  selector: 'mh-nav-item',
  templateUrl: './item.component.html',
  styleUrls: [ 'item.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('animate', [
      transition('* => entered', [
        style({
          opacity: 0,
          transform: 'translateY(100px)'
        }),
        animate(materialDesignCurve, style({
          opacity: 1,
          transform: 'translateY(0)'
        }))
      ])
    ])
  ]
})
export class ItemComponent {
  @Input() data: Item;
  @Input() index: number;

  public enterState: string = 'entered';
  constructor(private store: Store<any>) {}
  public go(path) {
    this.store.dispatch(new RouterActions.Go({path: [path]}));
  }
}
