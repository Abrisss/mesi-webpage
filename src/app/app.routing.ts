import {RouterModule, Routes} from '@angular/router';

import {MenuComponent} from './menu/menu.component';
import {ContactComponent} from './contact/contact.component';

const routes: Routes = [
  {path: '', component: MenuComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'contact', component: ContactComponent}
];

export const routing = RouterModule.forRoot(routes);
