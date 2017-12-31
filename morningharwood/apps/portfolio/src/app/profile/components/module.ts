import { NgModule } from '@angular/core';

import { StandardBlockComponent } from './standard-block/component';
import { DisclaimerComponent } from './disclaimer';
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

export const DECLARE_EXPORT = [
  StandardBlockComponent,
  DisclaimerComponent,
  StandardListComponent,
  StandardTableComponent,
  StandardRichComponent,
  CarouselListComponent,
  CarouselItemComponent,
  VideoBlockComponent
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

