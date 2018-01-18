import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-jogos-detalhes',
  templateUrl: 'jogos-detalhes.html',
})
export class JogosDetalhesPage {
  
  jogo;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    this.jogo = this.navParams.get('jogo');
    console.log(this.jogo);
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JogosDetalhesPage');
  }

}
