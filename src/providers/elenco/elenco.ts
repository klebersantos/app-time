import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../envrionment';

@Injectable()
export class ElencoProvider {

  api_url = environment.site_url+environment.elenco_url;

  constructor(public http: HttpClient) {
    console.log('Hello ElencoProvider Provider');
  }

  getElenco() {
    return this.http.get(this.api_url);
  }

}
