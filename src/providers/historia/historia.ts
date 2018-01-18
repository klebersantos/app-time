import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../envrionment';

@Injectable()
export class HistoriaProvider {

  api_url = environment.site_url+environment.historia_url;

  constructor(public http: HttpClient) {
    console.log('Hello HistoriaProvider Provider');
  }

  getHistoria() {
    return this.http.get(this.api_url);
  }

}
