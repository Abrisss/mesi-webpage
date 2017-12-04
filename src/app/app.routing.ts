import {RouterModule, Routes} from '@angular/router';
import {ContactComponent} from './contact/contact.component';
import {AboutMeComponent} from './about-me/about-me.component';


const routes: Routes = [
  {path: '', component: AboutMeComponent, pathMatch: 'full'},
  {path: 'about-me', component: AboutMeComponent, pathMatch: 'full'},
  // {path: 'blog', component: BlogComponent, pathMatch: 'full'},
  // {path: 'send-message', component: SendMessageComponent, pathMatch: 'full'},
  {path: 'contact', component: ContactComponent, pathMatch: 'full'}
];

export const routing = RouterModule.forRoot(routes);
