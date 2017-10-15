import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

import {OrderModule} from 'ngx-order-pipe';
import {CollapseModule} from "ngx-bootstrap";
import {LightboxModule} from 'angular2-lightbox';
import {LazyLoadImageModule} from "ng-lazyload-image";

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";

import {IntroComponent} from './pages/intro/intro.component';
import {WeddingComponent} from './pages/wedding/wedding.component';
import {TimelineComponent} from './pages/timeline/timeline.component';
import {GuestbookComponent} from './pages/guestbook/guestbook.component';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';

import {FooterComponent} from './components/footer/footer.component';
import {GalleryComponent} from './components/gallery/gallery.component';
import {CommentsComponent} from './components/comments/comments.component';
import {FilterComponent} from './components/filter/filter.component';
import {MenuComponent} from './components/menu/menu.component';
import {GalleryViewerComponent} from './pages/gallery-viewer/gallery-viewer.component';
import {ClickOutsideDirective} from "./directives/clicked-outside.directive";
import {breakpointsProvider} from 'angular-breakpoints';

@NgModule({
	declarations: [
		AppComponent,
		FooterComponent,
		WeddingComponent,
		GalleryComponent,
		TimelineComponent,
		GuestbookComponent,
		CommentsComponent,
		FilterComponent,
		PageNotFoundComponent,
		MenuComponent,
		IntroComponent,
		GalleryViewerComponent,
		ClickOutsideDirective,
	],
	imports: [
		BrowserModule,
		FormsModule,
		AppRoutingModule,
		HttpClientModule,
		LightboxModule,
		OrderModule,
		CollapseModule.forRoot(),
		LazyLoadImageModule
	],
	providers: [
		breakpointsProvider()
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
