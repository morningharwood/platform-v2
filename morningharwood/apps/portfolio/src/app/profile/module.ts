import { NgModule } from '@angular/core';
import { MasterProfileContainerComponent } from './containers/master/component';
import { ResumeContainerComponent } from './containers/resume/component';
import * as profileRoutes from './routes';
import { CommonModule } from '@angular/common';

export const DECLARE_EXPORT = [
  ResumeContainerComponent,
  MasterProfileContainerComponent,
];

@NgModule({
  declarations: [...DECLARE_EXPORT],
  exports: [...DECLARE_EXPORT],
  imports: [
    CommonModule,
    profileRoutes.routes,
  ],
})
export class ProfileModule {
}

