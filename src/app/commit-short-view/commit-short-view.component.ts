import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-commit-short-view',
  templateUrl: './commit-short-view.component.html',
  styleUrls: ['./commit-short-view.component.css']
})
export class CommitShortViewComponent {
  @Input() commitData: any;
  commit: any;
  author: any;
  constructor(
    private datePipe: DatePipe
  ) { }

  ngOnInit() {
    this.commit = this.commitData.commit;
    this.author = this.commitData.author;
    this.commit.date = this.datePipe.transform(this.commitData.commit.committer.date, 'MMM d, yyyy');
  }
}
