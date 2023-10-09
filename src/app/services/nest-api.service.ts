import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NestApiService {

  private baseUrl = 'http://localhost:3000/github';

  constructor(
    private http: HttpClient
  ) { }

  getListCommits(owner: string, repo: string, per_page: number) {
    return this.http.get(`${this.baseUrl}/repos/${owner}/${repo}/commits?per_page=${per_page}`);
  }

}
