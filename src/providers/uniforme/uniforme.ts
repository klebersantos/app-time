import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../envrionment';


@Injectable()
export class UniformeProvider {

  api_url = environment.site_url+environment.uniforme_url;

  constructor(public http: HttpClient) {
    console.log('Hello UniformeProvider Provider');
  }

  getUniformes() {
    return this.http.get(this.api_url);
  }
}
