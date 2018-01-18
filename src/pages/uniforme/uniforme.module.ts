import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UniformePage } from './uniforme';

@NgModule({
  declarations: [
    UniformePage,
  ],
  imports: [
    IonicPageModule.forChild(UniformePage),
  ],
})
export class UniformePageModule {}
