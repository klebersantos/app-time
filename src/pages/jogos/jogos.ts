import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { JogosProvider } from '../../providers/jogos/jogos';
import { Refresher } from 'ionic-angular/components/refresher/refresher';

@IonicPage()
@Component({
  selector: 'page-jogos',
  templateUrl: 'jogos.html',
})
export class JogosPage {

  jogos;

  public refresher;
  public isRefreshing: boolean = false;
  public loader;
  
  carregarJogos() {
    this.jogosProvider.getJogos().subscribe( data => {
      console.log(data);
      this.jogos = data;
      this.fechaCarregando();
      if(this.isRefreshing){
        this.refresher.complete();
        this.isRefreshing = false;
      }
    });
  }

  doRefresh(refresher) {
    this.refresher = refresher;
    this.isRefreshing = true;

    this.carregarJogos();
   
  }
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public loadingCtrl: LoadingController,
    private jogosProvider: JogosProvider
  ) {}

  abreCarregando() {
    this.loader = this.loadingCtrl.create({
      content: "Carregando..."
    });
    this.loader.present();
  }

  fechaCarregando () {
    this.loader.dismiss();
  }

  
  ionViewDidEnter() {
    console.log('ionViewDidLoad JogosPage');
    this.abreCarregando();
    this.carregarJogos();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JogosPage');
   
  }

  onShowJogosDetalhes(jogo) {
    this.navCtrl.push('JogosDetalhesPage', {jogo: jogo});
  }

}
