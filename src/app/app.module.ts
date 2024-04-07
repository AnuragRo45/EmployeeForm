import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataGridComponent } from './data-grid/data-grid.component';
import { AddDataComponent } from './add-data/add-data.component';

@NgModule({
  declarations: [
    AppComponent,
    DataGridComponent,
    AddDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
