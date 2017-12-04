import {AfterViewInit, Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
	selector: 'app-intro',
	templateUrl: './intro.component.html',
	styleUrls: ['./intro.component.scss'],
	animations: [
		trigger('introAnimation', [
			state('loading', style({
				transform: 'translate3d(0, 100%, 0)'
			})),
			state('done',   style({
				transform: 'translate3d(0, 0, 0)'
			})),
			transition('loading => done', animate('0.7s ease-out')),
		])
	]
})
export class IntroComponent implements OnInit, AfterViewInit {
	public init = 'loading';

	constructor() {
	}

	ngOnInit() {
	}

	ngAfterViewInit(): void {
		setTimeout(() => {
			this.init = 'done';
		});
	}

}
