import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LinksComponent } from './links/links.component';
import { NextStepsComponent } from './next-steps/next-steps.component';
import { ResourcesComponent } from './resources/resources.component';
import { HighlightCardComponent } from './highlight-card/highlight-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LinksComponent,
    NextStepsComponent,
    ResourcesComponent,
    HighlightCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
