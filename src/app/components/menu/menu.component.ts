import {Component, ElementRef, HostListener, OnInit} from '@angular/core';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
	isCollapsed: Boolean = true;

	constructor(private _elementRef : ElementRef) {
	}

	ngOnInit() {
	}

	@HostListener('document:click', ['$event'])
	public onClick(event: MouseEvent) {
		const clickedInside = this._elementRef.nativeElement.contains(event.target);
		if (clickedInside === false || event.srcElement.tagName.toLocaleLowerCase() === 'a') {
			this.isCollapsed = true;
		}
	}

}