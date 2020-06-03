import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FichasService {

  fichasUrl = 'http://localhost:3333/ficha';
  constructor(private http: HttpClient) { }

  create(ficha) {
    return this.http.post(this.fichasUrl,  ficha).pipe();
  }
}
