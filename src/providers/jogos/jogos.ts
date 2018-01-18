import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../envrionment';


@Injectable()
export class JogosProvider {

  api_url = environment.site_url+environment.jogos_url;

  constructor(public http: HttpClient) {
    console.log('Hello JogosProvider Provider');
  }

  getJogos() {
    return this.http.get(this.api_url);
  }

}
