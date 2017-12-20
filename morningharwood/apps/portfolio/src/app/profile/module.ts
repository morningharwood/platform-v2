import { NgModule } from '@angular/core';
import { MasterContainerComponent } from './containers/master/component';
import { ResumeContainerComponent } from './containers/resume/component';
import * as profileRoutes from './routes';

export const DECLARE_EXPORT = [
  ResumeContainerComponent,
  MasterContainerComponent,
];

@NgModule({
  declarations: [...DECLARE_EXPORT],
  exports: [...DECLARE_EXPORT],
  imports: [
    profileRoutes.routes,
  ],
})
export class ProfileModule {
}

