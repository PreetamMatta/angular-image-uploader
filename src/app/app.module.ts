import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DropzoneComponent } from './dropzone/dropzone.component';
import { DataDisplayComponent } from './data-display/data-display.component';

@NgModule({
  declarations: [AppComponent, DropzoneComponent, DataDisplayComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
