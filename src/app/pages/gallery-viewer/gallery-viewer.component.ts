import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Location} from '@angular/common';

@Component({
	selector: 'app-gallery-viewer',
	templateUrl: './gallery-viewer.component.html',
	styleUrls: ['./gallery-viewer.component.scss']
})
export class GalleryViewerComponent implements OnInit {

	public galleryId: string;
	public subGalleryId: string;
	public numberOfPreviewImages: number = 5;

	constructor(private route: ActivatedRoute,
	            private _location: Location) {
		const paramsMap = this.route.snapshot.paramMap;
		if (!this.galleryId && paramsMap.has('galleryId')) {
			this.galleryId = paramsMap.get('galleryId');
			this.numberOfPreviewImages = -1;
		}
		if (!this.subGalleryId && paramsMap.has('subGalleryId')) {
			this.subGalleryId = paramsMap.get('subGalleryId');
			this.numberOfPreviewImages = -1;
		}
	}

	ngOnInit() {
	}

	back() {
		this._location.back();
	}

}
