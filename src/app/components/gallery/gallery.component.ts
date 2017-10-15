import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from '../../../environments/environment';
import {Lightbox} from "angular2-lightbox";
import 'rxjs/add/operator/switchMap';

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

	constructor(private http: HttpClient,
	            public lightbox: Lightbox) {
	}

	ngOnInit() {
		this.initGalleryImages();
	}

	private getDataSourceUrl() {
		let dataSourceUrl = environment.apiBaseUrl + '/api/galleries/' + this.galleryId;
		if (this.subGalleryId) {
			dataSourceUrl += '/' + this.subGalleryId;
		}
		return dataSourceUrl;
	}

	private initGalleryImages() {
		this.http.get<WeddingGalleryData>(this.getDataSourceUrl()).subscribe(data => {
			for (let key in data) {
				if (data.hasOwnProperty(key)) {
					this.images.push({
						caption: data[key].filename,
						src: data[key].url_large,
						thumb: data[key].url_thumbnail
					});
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
}
