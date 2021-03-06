import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { HeroService } from './hero.service';
import { DashboardComponent } from './dashboard.component';
import { HeroSearchComponent } from './hero-search.component';
import { HeroFormComponent } from './hero-form.component';
import { HightlightDirective } from './highlight.directive';
import { AttributeTestComponent } from './attribute-test.component';

@NgModule({
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      InMemoryWebApiModule.forRoot(InMemoryDataService),
      AppRoutingModule
   ],
  declarations: [
      AppComponent,
      HeroDetailComponent,
      HeroFormComponent,
      HeroSearchComponent,
      HeroesComponent,
      DashboardComponent,
      HightlightDirective,
      AttributeTestComponent
  ],
  providers: [
      HeroService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
