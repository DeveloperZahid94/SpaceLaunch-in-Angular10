import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpaceXLaunchComponent } from './space-xlaunch/space-xlaunch.component';
import{HttpClientModule} from '@angular/common/http';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    SpaceXLaunchComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
