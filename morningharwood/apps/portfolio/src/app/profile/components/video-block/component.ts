import { Component, HostBinding, HostListener, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import * as YouTubePlayer from 'youtube-player';
import { animate, state, style, transition, trigger } from '@angular/animations';
import {get} from 'lodash';
import { Store } from '@ngrx/store';
import { Update } from './actions/index';

const ID = 'mh-yt-videoframe';

@Component({
  selector: 'mh-video-block',
  templateUrl: './component.html',
  styleUrls: ['../shared-styles.scss', './component.scss'],
  animations: [

    trigger('popOverState', [
      state('show', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      state('hide', style({
        opacity: 0,
        transform: 'translateY(500px)'
      })),
      transition('show => hide', animate('300ms ease-out')),
      transition('hide => show', animate('600ms ease-in')),
    ]),
  ],
})
export class VideoBlockComponent implements OnInit, OnDestroy, OnChanges{
  @Input() public title: string;
  @Input() public ytId: any;
  @Input() public data: any;

  public player: any;

  constructor(private store:Store<any>) {}

  @HostBinding('@popOverState')
  public get stateName(): string {
    const hasId = get(this.ytId, 'ytId', '');
    return hasId ? 'show': 'hide';
  }

  public ngOnInit() {
    this.player = YouTubePlayer(ID, {
      height: 190,
      width: 337,
    });
  }

  public ngOnChanges() {
    console.log('change');
    if (this.ytId) {
      this.player.loadVideoById(this.ytId.ytId);
      this.player.playVideo();
    }
  }

  public ngOnDestroy(): void {
    this.player.stopVideo();
  }

  public close(): void {
    this.player.stopVideo().then(() => {
      this.store.dispatch(new Update({ytId: ''}));
    });
  }
}
