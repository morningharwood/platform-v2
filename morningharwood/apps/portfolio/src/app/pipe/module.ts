import { NgModule } from '@angular/core';
import { SupSubPipe } from './sup_sub';



const DECLARE_EXPORT = [SupSubPipe];

@NgModule({
  imports: [],
  exports: [...DECLARE_EXPORT],
  declarations: [...DECLARE_EXPORT],
  providers: [],
})
export class MhPipesModule {
}
