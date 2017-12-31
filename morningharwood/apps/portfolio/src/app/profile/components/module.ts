import { NgModule } from '@angular/core';

import { StandardBlockComponent } from './standard-block/component';
import { DisclaimerComponent } from './disclaimer';
import { CommonModule } from '@angular/common';
import { StandardListComponent } from './standard-list/component';
import { StandardTableComponent } from './standard-table/component';

export const DECLARE_EXPORT = [
  StandardBlockComponent,
  DisclaimerComponent,
  StandardListComponent,
  StandardTableComponent
];

@NgModule({
  declarations: [...DECLARE_EXPORT ],
  exports: [...DECLARE_EXPORT],
  imports: [CommonModule],
})
export class ProfileComponentsModule {
}

