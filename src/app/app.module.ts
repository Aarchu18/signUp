import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { DisplayComponent } from './display/display.component';
import { TestComponent } from './test/test.component';
const routes: Routes = [
  { path: 'display', component: DisplayComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  }
