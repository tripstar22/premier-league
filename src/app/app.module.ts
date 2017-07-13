import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdDatepickerModule, MdToolbarModule, MdListModule, MdCardModule, MdButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { LukakuComponent } from './components/features/lukaku/lukaku.component';
import { LukakuGraphsComponent } from './components/d3/lukaku-graphs/lukaku-graphs.component';
import { ArticleCategoriesComponent } from './components/article-categories/article-categories.component';

import { routing } from './routing/app.routing';
import { AppHttpService } from './services/app-http.service';

@NgModule({
	declarations: [
		AppComponent,
		NavComponent,
		LukakuComponent,
		LukakuGraphsComponent,
		ArticleCategoriesComponent
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
		AppHttpService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
