import {RouterModule, Routes} from '@angular/router';
import {ContactComponent} from './contact/contact.component';
import {BlogComponent} from './blog/blog.component';
import {AboutMeComponent} from './about-me/about-me.component';
import {SendMessageComponent} from './send-message/send-message.component';


const routes: Routes = [
  {path: '', component: AboutMeComponent},
  {path: 'about-me', component: AboutMeComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'send-message', component: SendMessageComponent},
  {path: 'contact', component: ContactComponent}
];

export const routing = RouterModule.forRoot(routes);
