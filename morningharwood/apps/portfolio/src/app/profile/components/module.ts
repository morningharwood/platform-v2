import { NgModule } from '@angular/core';

import { StandardBlockComponent } from './standard-block/component';
import { DisclaimerComponent } from './standard-block/disclaimer';
import { CommonModule } from '@angular/common';
import { StandardListComponent } from './standard-list/component';
import { StandardTableComponent } from './standard-table/component';
import { StandardRichComponent } from './rich-list/component';
import { CarouselListComponent } from './carousel/list/component';
import { CarouselItemComponent } from './carousel/item/component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VideoBlockComponent } from './video-block/component';
import { StoreModule } from '@ngrx/store';
import { videoReducer } from './video-block/actions/index';
import { TitleComponent } from './standard-block/title';
import { VisitedListComponent } from './visited-list/component';

export const DECLARE_EXPORT = [
  StandardBlockComponent,
  DisclaimerComponent,
  StandardListComponent,
  StandardTableComponent,
  StandardRichComponent,
  CarouselListComponent,
  CarouselItemComponent,
  VideoBlockComponent,
  TitleComponent,
  VisitedListComponent
];

@NgModule({
  declarations: [...DECLARE_EXPORT ],
  exports: [...DECLARE_EXPORT],
  imports: [
      CommonModule,
      BrowserAnimationsModule,
      StoreModule.forFeature('profile', videoReducer),
  ],

})
export class ProfileComponentsModule {
}

