import { Component } from '@angular/core';
import { NestApiService } from './services/nest-api.service';
import { MatDialog } from '@angular/material/dialog';
import { LinkDialogComponent } from './link-dialog/link-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fulltimeforce-app';
  commits: { date: string, commits: any[] }[] = [];
  per_page: number = 30;
  owner: string = '';
  repo: string = '';
  submitted: boolean = false;

  constructor(
    private nestApiService: NestApiService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LinkDialogComponent, {
      width: '800px', // Set the dialog's width as desired
      height: '100px', // Set the dialog's height as desired
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (!result) return;
      // Handle the result (the link entered by the user)
      // input = 'https://github.com/fabio4520/coding-interview-university'
      const input = result;
      const inputArray = input.split('/');
      this.owner = inputArray[3];
      this.repo = inputArray[4];
      this.fetchCommits();
    });

  }

  setPerPage(per_page: number) {
    this.per_page = per_page;
    this.fetchCommits();
  }

  fetchCommits() {
    this.nestApiService.getListCommits(this.owner, this.repo, this.per_page).subscribe(
      (data: any) => {
        this.commits = data;
        this.submitted = true;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
