import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Update } from '../video-block/actions/index';

@Component({
  selector: 'mh-title',
  template: '<p class="title">{{data.title}}<span *ngIf="this.data.youtubeId">🔺</span></p>',
  styleUrls: ['./component.scss'],
})
export class TitleComponent implements OnInit {

  @Input() public data: any;

  constructor(private store: Store<any>) {
  }

  public ngOnInit(): void {
  }

  @HostListener('click')
  videoOpen() {
    if (this.data.youtubeId) {
      this.store.dispatch(new Update({data: this.data}));
    }
  }
}

