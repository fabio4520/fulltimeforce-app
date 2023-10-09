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

  getListCommits(per_page: number) {
    return this.http.get(`${this.baseUrl}/repos/fabio4520/coding-interview-university/commits?per_page=${per_page}`);
  }

}
