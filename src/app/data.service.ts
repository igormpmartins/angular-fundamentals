import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private httpClient: HttpClient) {}

  getItems() {
    //Usar o HttpClient ou mesmo uma lista JSON
    //const path: string = 'assets/shopping-cart.json';
    const path: string = 'https://jsonplaceholder.typicode.com/todos/';
    return this.httpClient.get<any>(path);
  }
}
