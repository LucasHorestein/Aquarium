import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AquariumComponent } from './aquarium/aquarium.component';
import { TableComponent } from './table/table.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    AquariumComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
