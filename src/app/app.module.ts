import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {MenuComponent} from './menu/menu.component';
import {routing} from './app.routing';
import {ContactComponent} from './contact/contact.component';
import {BlogComponent} from './blog/blog.component';
import {AboutMeComponent} from './about-me/about-me.component';
import {FooterComponent} from './footer/footer.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {AgmCoreModule} from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContactComponent,
    BlogComponent,
    AboutMeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AngularFontAwesomeModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBP1DtEbH75Amr0qPH-MZxuaArdQjz7ydg'
    }),
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
