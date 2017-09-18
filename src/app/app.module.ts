import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GenericAutocompleteModule } from 'ng-generic-autocomplete';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GenericAutocompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
