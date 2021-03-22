import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import the ChipListModule for the Chip component
import { ChipListModule } from '@syncfusion/ej2-angular-buttons';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, ChipListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
