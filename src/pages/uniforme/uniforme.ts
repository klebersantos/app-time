import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { UniformeProvider } from '../../providers/uniforme/uniforme'
import { Refresher } from 'ionic-angular/components/refresher/refresher';

@IonicPage()
@Component({
  selector: 'page-uniforme',
  templateUrl: 'uniforme.html',
})
export class UniformePage {

  uniformes;

  public refresher;
  public isRefreshing: boolean = false;
  public loader;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public loadingCtrl: LoadingController,
    private uniformeProvider: UniformeProvider
  ) {}

  carregarUniformes(){
    this.uniformeProvider.getUniformes().subscribe( data => {
      console.log(data);
      this.uniformes = data;
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

    this.carregarUniformes();
   
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
    console.log('ionViewDidLoad UniformePage');
    this.abreCarregando();
    this.carregarUniformes();
  }

}
