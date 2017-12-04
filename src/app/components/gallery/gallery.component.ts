import {Component, Input, OnInit} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from '../../../environments/environment';
import {Lightbox} from "angular2-lightbox";
import 'rxjs/add/operator/switchMap';
import {animate, query, stagger, style, transition, trigger} from '@angular/animations';

@Component({
	selector: 'app-gallery',
	templateUrl: './gallery.component.html',
	styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

	@Input() public galleryId: string;
	@Input() public subGalleryId: string;
	@Input() public centerThumbnails: boolean = true;
	@Input() public numberOfPreviewImages: number = 5;

	public images: { caption: string, src: string, thumb: string }[] = [];
	public offset = 200;
	public defaultImage = '/assets/images/loader_300.gif';
	public isLoadingImageReady = false;
	public previewImages = [];

	private dataSourceUrl = environment.apiBaseUrl + '/api/gallery/show';

	constructor(private http: HttpClient,
	            public lightbox: Lightbox) {
	}

	ngOnInit() {
		this.initGalleryImages();
	}

	private initGalleryImages() {
		let params = new HttpParams();
		params = params.append('galleryId', this.galleryId);
		params = params.append('subGalleryId', this.subGalleryId);

		this.http.get<WeddingGalleryData>(this.dataSourceUrl, {params: params}).subscribe(data => {
			for (let key in data) {
				if (data.hasOwnProperty(key)) {
					this.images.push({
						caption: data[key].filename,
						src: data[key].url_large,
						thumb: data[key].url_thumbnail
					});
					this.previewImages = this.getPreviewImages();
				}
			}
		});
	}

	getPreviewImages() {
		if (this.numberOfPreviewImages <= 0 || this.images.length <= this.numberOfPreviewImages) {
			return this.images;
		}
		return this.images.slice(0, this.numberOfPreviewImages);
	}

	openLightbox(index: number) {
		this.lightbox.open(this.images, index);
	}

	public loadingImageReadyCallback(event) {
		this.isLoadingImageReady = true;
	}
}
