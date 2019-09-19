import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequesthttpService {
  constructor(private http: HttpClient) { }

  apiUrl = 'http://localhost:3000/';

  getIssues(): Observable<any> {
    return this.http.get(this.apiUrl + 'issues');
  }

  newIssuesForm(data): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
    return this.http.post<any>(this.apiUrl + 'issues', JSON.stringify(data), { headers });
  }

  updateIssues(id, data): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
    return this.http.put<any>(this.apiUrl + 'issues/' + id, JSON.stringify(data), { headers });
  }

  delIssues(id): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
    return this.http.delete<any>(this.apiUrl + 'issues/' + id, { headers });
  }
}
