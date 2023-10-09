import { Component } from '@angular/core';
import { NestApiService } from './services/nest-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fulltimeforce-app';
  commits: { date: string, commits: any[] }[] = [];
  per_page: number = 30;

  constructor(
    private nestApiService: NestApiService
  ) { }

  ngOnInit() {
    this.nestApiService.getListCommits(this.per_page).subscribe(
      (data: any) => {
        console.log(data);
        this.commits = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  setPerPage(per_page: number) {
    this.per_page = per_page;
    this.ngOnInit();
  }
}
