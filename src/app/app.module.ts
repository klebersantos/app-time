import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { JogosPageModule } from '../pages/jogos/jogos.module';
import { HistoriaPageModule } from '../pages/historia/historia.module';
import { JogosDetalhesPageModule } from '../pages/jogos-detalhes/jogos-detalhes.module';
import { ElencoPageModule } from '../pages/elenco/elenco.module';
import { ElencoDetalhesPageModule } from '../pages/elenco-detalhes/elenco-detalhes.module';
import { UniformePageModule } from '../pages/uniforme/uniforme.module';
import { AuthProvider } from '../providers/auth/auth';
import { JogosProvider } from '../providers/jogos/jogos';
import { HttpClientModule } from '@angular/common/http';
import { HistoriaProvider } from '../providers/historia/historia';
import { ElencoProvider } from '../providers/elenco/elenco';
import { ConfigProvider } from '../providers/config/config';
import { UniformeProvider } from '../providers/uniforme/uniforme';


@NgModule({
  declarations: [
    MyApp,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    JogosPageModule,
    JogosDetalhesPageModule,
    HistoriaPageModule,
    ElencoPageModule,
    ElencoDetalhesPageModule,
    UniformePageModule,
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    JogosProvider,
    HistoriaProvider,
    ElencoProvider,
    ConfigProvider,
    UniformeProvider
  ]
})
export class AppModule {}
