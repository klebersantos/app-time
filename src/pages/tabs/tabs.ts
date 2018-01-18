import { Component } from '@angular/core';
import { JogosPage } from '../jogos/jogos';
import { HistoriaPage } from '../historia/historia';
import { ElencoPage } from '../elenco/elenco';
import { UniformePage } from '../uniforme/uniforme';



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = JogosPage;
  tab2Root = HistoriaPage;
  tab3Root = ElencoPage;
  tab4Root = UniformePage;

  constructor() {

  }
}
