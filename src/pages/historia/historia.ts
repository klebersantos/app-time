import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { HistoriaProvider } from '../../providers/historia/historia';
import { Refresher } from 'ionic-angular/components/refresher/refresher';


@IonicPage()
@Component({
  selector: 'page-historia',
  templateUrl: 'historia.html',
})
export class HistoriaPage {

  historias;


  public refresher;
  public isRefreshing: boolean = false;
  public loader;

  constructor(
    public navCtrl: NavController, 
    public loadingCtrl: LoadingController,
    public navParams: NavParams, 
    private HistoriaProvider: HistoriaProvider
  ) {
   
  }

  carregarHistoria(){
    this.HistoriaProvider.getHistoria().subscribe( data => {
      console.log(data);
      this.historias = data;
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

    this.carregarHistoria();
   
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
    console.log('ionViewDidLoad HistoriaPage');
    this.abreCarregando();
    this.carregarHistoria();
  }

}
