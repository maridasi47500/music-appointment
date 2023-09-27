import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { EditSongPageRoutingModule } from './edit-song-routing.module';

import { EditSongPage } from './edit-song.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditSongPageRoutingModule,FormsModule, ReactiveFormsModule
  ],
  declarations: [EditSongPage]
})
export class EditSongPageModule {}
