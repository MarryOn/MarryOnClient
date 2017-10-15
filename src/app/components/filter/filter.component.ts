import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';

@Component({
	selector: 'app-filter',
	templateUrl: './filter.component.html',
	styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit, OnChanges {

	@Input() data: {}[];
	@Output() onFiltering = new EventEmitter<{}[]>();

	searchText: string;

	constructor() {
	}

	ngOnInit() {
	}

	ngOnChanges() {
		this.filter();
	}

	filter(){
		if(!this.searchText){
			this.onFiltering.emit(this.data);
			return;
		}
		this.onFiltering.emit(this.data.filter((item: any) => {
			switch(true) {
				case item.author.indexOf(this.searchText) !== -1:
					return true;
				case item.content.indexOf(this.searchText) !== -1:
					return true;
				default:
					return false;
			}
		}));
	}

	reset() {
		this.searchText = '';
		this.onFiltering.emit(this.data);
	}

}
