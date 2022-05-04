import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './cmps/app-root/app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AppHeaderComponent,
    ContactPageComponent,
    ContactListComponent,
    ContactPreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
