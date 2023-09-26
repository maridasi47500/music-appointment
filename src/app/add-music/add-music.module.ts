import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddMusicPageRoutingModule } from './add-music-routing.module';

import { AddMusicPage } from './add-music.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddMusicPageRoutingModule
  ],
  declarations: [AddMusicPage]
})
export class AddMusicPageModule {}
