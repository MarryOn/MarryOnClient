import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import {environment} from '../../../environments/environment';

@Component({
	selector: 'app-comments',
	templateUrl: './comments.component.html',
	styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

	private dataSourceUrl = environment.apiBaseUrl + '/api/comments';
	private addCommentUrl = environment.apiBaseUrl + '/api/comment/add';

	@Input() target: string;

	public comments: AbstractComment[] = [];
	public filteredComments: AbstractComment[] = [];
	public author: string = '';
	public content: string = '';

	constructor(private http: HttpClient) {
	}

	ngOnInit() {
		this.http.get<AbstractComment[]>(this.getDataSourceUrl())
			.subscribe(data => {
				this.comments = data;
			});
	}

	onSubmit(form: NgForm) {
		if (form.valid) {
			this.http.post<{ comment?: AbstractComment, success: boolean }>(this.addCommentUrl, {
				comment: {
					author: this.author,
					content: this.content,
					target: this.target
				}
			})
				.subscribe(data => {
					this.comments.unshift(data.comment)
					this.author = '';
					this.content = '';
				});
		}
	}

	onFiltering(data) {
		this.filteredComments = data;
	}

	getDataSourceUrl(): string {
		return this.target ? this.dataSourceUrl + '?target=' + this.target : this.dataSourceUrl;
	}
}
