import {RouterModule, Routes} from '@angular/router';
import {ContactComponent} from './contact/contact.component';
import {BlogComponent} from './blog/blog.component';
import {AboutMeComponent} from './about-me/about-me.component';


const routes: Routes = [
  {path: '', component: AboutMeComponent},
  {path: 'about-me', component: AboutMeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'blog', component: BlogComponent}
];

export const routing = RouterModule.forRoot(routes);
