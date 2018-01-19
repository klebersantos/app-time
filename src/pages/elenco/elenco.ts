import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ElencoProvider } from '../../providers/elenco/elenco';
import { Refresher } from 'ionic-angular/components/refresher/refresher';

@IonicPage()
@Component({
  selector: 'page-elenco',
  templateUrl: 'elenco.html',
})
export class ElencoPage {

  elencos;

  public refresher;
  public isRefreshing: boolean = false;
  public loader;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    private elencoProvider: ElencoProvider
  ) {
    
  }

  carregarElenco(){
    this.elencoProvider.getElenco().subscribe( data => {
      console.log(data);
      this.elencos = data;  
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

    this.carregarElenco();
   
  }

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
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ElencoPage');
    this.abreCarregando();
    this.carregarElenco();
  }

  onShowElencoDetalhes(elenco) {
    this.navCtrl.push('ElencoDetalhesPage', {elenco: elenco});
  }

}
