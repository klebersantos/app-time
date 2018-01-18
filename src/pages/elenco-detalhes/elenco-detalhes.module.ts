import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ElencoDetalhesPage } from './elenco-detalhes';

@NgModule({
  declarations: [
    ElencoDetalhesPage,
  ],
  imports: [
    IonicPageModule.forChild(ElencoDetalhesPage),
  ],
})
export class ElencoDetalhesPageModule {}
