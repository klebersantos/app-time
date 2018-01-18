import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-elenco-detalhes',
  templateUrl: 'elenco-detalhes.html',
})
export class ElencoDetalhesPage {

  elenco;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.elenco = this.navParams.get('elenco');
    console.log(this.elenco);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ElencoDetalhesPage');
  }

}
