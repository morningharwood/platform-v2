import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { MasterContainerComponent } from 'apps/portfolio/src/app/profile/containers/master/component';
import { ResumeContainerComponent } from './containers/resume/component';

export const config: Routes = [
  {
    path: 'profile',
    children: [
      {
        path: '',
        component: MasterContainerComponent,
      },
      {
        path: 'resume',
        component: ResumeContainerComponent,
      },
    ],
  },
];

export const routes: ModuleWithProviders = RouterModule.forRoot(config);