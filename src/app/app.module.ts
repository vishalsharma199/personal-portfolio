import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import { coreComponents } from './components';
import * as pages from './pages';
import { ProfileModule } from './profile/profile.module';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [...coreComponents,...pages.corePages,
    AppComponent,
    IndexComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProfileModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
