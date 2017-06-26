import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdDatepickerModule, MdToolbarModule, MdListModule, MdCardModule, MdButtonModule } from '@angular/material';
import { D3Service } from 'd3-ng2-service';

import { AppComponent } from './app.component';
import { StatCategoriesComponent } from './components/stat-categories/stat-categories.component';
import { NavComponent } from './components/nav/nav.component';
import { TopScorerComponent } from './components/top-scorer/top-scorer.component';
import { CleanSheetsComponent } from './components/clean-sheets/clean-sheets.component';

import { routing } from './routing/app.routing';
import { AppHttpService } from './services/app-http.service';

@NgModule({
	declarations: [
		AppComponent,
		StatCategoriesComponent,
		NavComponent,
		TopScorerComponent,
		CleanSheetsComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		BrowserAnimationsModule,
		MdDatepickerModule,
		MdToolbarModule,
		MdListModule,
		MdCardModule,
		MdButtonModule,
		routing
	],
	providers: [
		D3Service,
		AppHttpService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
