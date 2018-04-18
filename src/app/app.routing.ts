import {RouterModule, Routes} from '@angular/router';
import {ContactComponent} from './contact/contact.component';
import {AboutMeComponent} from './about-me/about-me.component';
import {SendMessageComponent} from './send-message/send-message.component';


const routes: Routes = [
  {path: 'about-me', component: AboutMeComponent, pathMatch: 'full'},
  {path: 'contact', component: ContactComponent, pathMatch: 'full'},
  // {path: 'blog', component: BlogComponent, pathMatch: 'full'},
  {path: 'send-message', component: SendMessageComponent, pathMatch: 'full'},
  {path: '', redirectTo: '/about-me', pathMatch: 'full'},
  {path: '**', redirectTo: '/about-me', pathMatch: 'full'}
];

export const routing = RouterModule.forRoot(routes);
