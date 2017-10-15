import {NgModule} from '@angular/core';

import {IntroComponent} from "./pages/intro/intro.component";
import {WeddingComponent} from './pages/wedding/wedding.component';
import {TimelineComponent} from './pages/timeline/timeline.component';
import {GuestbookComponent} from './pages/guestbook/guestbook.component';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {GalleryViewerComponent} from "./pages/gallery-viewer/gallery-viewer.component";

const appRoutes: Routes = [
	{path: '', component: IntroComponent},
	{path: 'timeline', component: TimelineComponent},
	{path: 'wedding', component: WeddingComponent},
	{path: 'guestbook', component: GuestbookComponent},
	{path: 'gallery/:galleryId/:subGalleryId', component: GalleryViewerComponent},
	{path: '**', component: PageNotFoundComponent}
];

@NgModule({
	imports: [
		RouterModule.forRoot(
			appRoutes,
			//{enableTracing: true} // <-- debugging purposes only
		)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule {
}
