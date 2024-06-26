import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface NewsResponse {
  message: string
}

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private endpointUrl = 'https://faed47pcwb7biktidlecuafuty0aegep.lambda-url.us-east-1.on.aws/';

  constructor(private http: HttpClient) { }

  sendData(name: string, email: string): Observable<NewsResponse>{
    const data = {name, email};

    return this.http.post<NewsResponse>(this.endpointUrl, data);
  }
}
