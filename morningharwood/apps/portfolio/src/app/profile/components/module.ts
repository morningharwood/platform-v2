import { NgModule } from '@angular/core';

import { StandardBlockComponent } from './standard-block/component';
import { DisclaimerComponent } from './disclaimer';
import { CommonModule } from '@angular/common';
import { StandardListComponent } from './standard-list/component';
import { StandardTableComponent } from './standard-table/component';
import { StandardRichComponent } from './rich-list/component';
import { CarouselListComponent } from './carousel-list/component';

export const DECLARE_EXPORT = [
  StandardBlockComponent,
  DisclaimerComponent,
  StandardListComponent,
  StandardTableComponent,
  StandardRichComponent,
  CarouselListComponent
];

@NgModule({
  declarations: [...DECLARE_EXPORT ],
  exports: [...DECLARE_EXPORT],
  imports: [CommonModule],
})
export class ProfileComponentsModule {
}

