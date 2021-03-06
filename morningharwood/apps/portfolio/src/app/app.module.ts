import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { NxModule } from '@nrwl/nx';
import { routes } from './app.routes';
import { RouterModule } from '@angular/router';
import { ProfileModule } from './profile/module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import {
  RouterStateSerializer,
  StoreRouterConnectingModule,
} from '@ngrx/router-store';
import { CustomSerializer, reducers } from './router/state';
import { RouterEffects } from './router/effects';
import { MenuModule } from './menu/module';
import { WorkModule } from './work/module';
import { LabModule } from './lab/module';
import { MhPipesModule } from './pipe/module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HamburgerModule } from './hamburger/module';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    NxModule.forRoot(),
    RouterModule.forRoot(routes),
    ProfileModule,
    MenuModule,
    LabModule,
    WorkModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([RouterEffects]),
    MhPipesModule,
    !environment.production
      ? StoreDevtoolsModule.instrument()
      : [],
    ServiceWorkerModule.register('/ngsw-worker.js', {
      enabled: environment.production,
    }),
    StoreRouterConnectingModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: RouterStateSerializer,
      useClass: CustomSerializer,
    },
  ],
})
export class AppModule {
}

