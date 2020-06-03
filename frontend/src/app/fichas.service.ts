import { API } from './../config/api.config';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ficha } from './ficha/shared/ficha';

@Injectable({
  providedIn: 'root'
})
export class FichasService {

  constructor(public http: HttpClient) { }

  create(obj: Ficha){
    return this.http.post(
      `${API.fichaUrl}/ficha`, obj, {
        observe: 'response',
        responseType: 'text'
      }
    );
  }
}
