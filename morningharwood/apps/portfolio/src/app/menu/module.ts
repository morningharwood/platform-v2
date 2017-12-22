import {NgModule} from "@angular/core";
import * as menuRoutes from './routes';
import {MasterMenuContainerComponent} from "./containers/master/component";
import {FolioModule} from "./components/folio/folio.module";
import {MenuNavigationModule} from "./components/navigation/navigation.module";

const DECLARE_EXPORT = [MasterMenuContainerComponent];

@NgModule({
  imports: [
    menuRoutes.routes,
    FolioModule,
    MenuNavigationModule
  ],
  declarations: [...DECLARE_EXPORT],
  exports: [...DECLARE_EXPORT]
})
export class MenuModule {
}
