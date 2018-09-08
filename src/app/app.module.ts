import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { LocationItemComponent } from './location-item/location-item.component';
import { LocationListComponent } from './location-list/location-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    LocationItemComponent,
    LocationListComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
