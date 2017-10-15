import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
	selector: 'app-wedding',
	templateUrl: './wedding.component.html',
	styleUrls: ['./wedding.component.scss'],
	encapsulation: ViewEncapsulation.None,
})
export class WeddingComponent implements OnInit {

	public dataSource: {title: string, position: string, subGalleryId: string}[] = [
		{title: 'Rüdiger', position: 'left', subGalleryId: 'ruediger'},
		{title: 'Trendsetter', position: 'right', subGalleryId: 'trendsetter'},
		{title: 'Uli', position: 'left', subGalleryId: 'uli'},
		{title: 'Torsten', position: 'right', subGalleryId: 'torsten'},
		{title: 'Ina', position: 'left', subGalleryId: 'ina'},
	];

	constructor() {
	}

	ngOnInit() {
	}

	getWeddingItems(position: String) {
		return this.dataSource.filter(item => item.position === position);
	}
}
