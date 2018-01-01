import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { MasterProfileContainerComponent } from './containers/master/component';
import { ResumeContainerComponent } from './containers/resume/component';

export const config: Routes = [
  {
    path: 'profile',
    children: [
      {
        path: '',
        component: MasterProfileContainerComponent,
        children: [
          {
            path: 'resume',
            component: ResumeContainerComponent,
          }
        ]
      },
      // {
      //   path: 'resume',
      //   component: ResumeContainerComponent,
      // },
    ],
  },
];

export const routes: ModuleWithProviders = RouterModule.forRoot(config);
