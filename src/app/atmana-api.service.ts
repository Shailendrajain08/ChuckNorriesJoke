import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class AtmanaApiService {

  constructor(private httpClient: HttpClient) {

  }
  getCategory() {
    return this.httpClient.get("https://api.chucknorris.io/jokes/categories");
  }

  getJokes(category: string) {
    return this.httpClient.get("https://api.chucknorris.io/jokes/random?category=" + category);
  }
}
