import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {MenuComponent} from './menu/menu.component';
import {routing} from './app.routing';
import {ContactComponent} from './contact/contact.component';
import {BlogComponent} from './blog/blog.component';
import {AboutMeComponent} from './about-me/about-me.component';
import {FooterComponent} from './footer/footer.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {SendMessageComponent} from './send-message/send-message.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContactComponent,
    BlogComponent,
    AboutMeComponent,
    FooterComponent,
    SendMessageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AngularFontAwesomeModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
