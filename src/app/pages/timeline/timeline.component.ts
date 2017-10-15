import {Component, HostListener, OnInit, ViewEncapsulation} from '@angular/core';
import {BreakpointsService, BreakpointEvent} from 'angular-breakpoints';

@Component({
	selector: 'app-timeline',
	templateUrl: './timeline.component.html',
	styleUrls: ['./timeline.component.scss'],
	encapsulation: ViewEncapsulation.None,
})
export class TimelineComponent implements OnInit {

	public timelineLayout: '1-col' | '2-col' = null;

	public dataSource: { year: number, position: string }[] = [
		{year: 2016, position: 'left'},
		{year: 2015, position: 'right'},
		{year: 2014, position: 'left'},
		{year: 2013, position: 'right'},
		{year: 2012, position: 'left'},
		{year: 2011, position: 'right'},
		{year: 2010, position: 'left'},
		{year: 2009, position: 'left'},
	];

	public context1col: { dataSource: { year: number, position: string }[] } = null;
	public context2colLeft: { dataSource: { year: number, position: string }[] } = null;
	public context2colRight: { dataSource: { year: number, position: string }[] } = null;

	constructor(private breakpointsService: BreakpointsService) {
		this.breakpointsService.changes.subscribe((event: BreakpointEvent) => {
			this.timelineLayout = (['xs', 'sm'].includes(event.name)) ? '1-col' : '2-col';
		});
	}

	ngOnInit() {
		this.context1col = {dataSource: this.dataSource};
		this.context2colLeft = {dataSource: this.getTimelineItems('left')};
		this.context2colRight = {dataSource: this.getTimelineItems('right')};
	}

	protected getTimelineItems(position: 'left' | 'right'): { year: number, position: string }[] {
		return this.dataSource.filter(item => item.position === position);
	}
}
