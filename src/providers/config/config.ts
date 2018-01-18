import { Injectable } from '@angular/core';

let config_key_name = "config";

@Injectable()
export class ConfigProvider {


  constructor() {

  }

  getConfigData(): any{
    return localStorage.getItem(config_key_name) || {};
  }

  setConfigData(name?: string, username?: string){
    let config = {
      name: "",
      username: ""
    };

    if(name) {
      config.name = name;
    }

    if(username) {
      config.username = username;
    }


    localStorage.setItem(config_key_name, JSON.stringify(config));
  }
}
