
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AddMusicPageRoutingModule } from './add-music-routing.module';

import { AddMusicPage } from './add-music.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddMusicPageRoutingModule
  ],
  declarations: [AddMusicPage],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AddMusicPageModule {}
