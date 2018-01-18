import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JogosDetalhesPage } from './jogos-detalhes';

@NgModule({
  declarations: [
    JogosDetalhesPage,
  ],
  imports: [
    IonicPageModule.forChild(JogosDetalhesPage),
  ],
})
export class JogosDetalhesPageModule {}
