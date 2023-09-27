import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyFilesPageRoutingModule } from './my-files-routing.module';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { MyFilesPage } from './my-files.page';
// Firebase
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { FormatFileSizePipe } from './format-file-size.pipe';
import { ModalController } from '@ionic/angular';
import { AddMusicPage } from '../add-music/add-music.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyFilesPageRoutingModule,
	        AngularFireAuthModule,
		      AngularFirestoreModule,
		            AngularFireStorageModule,
			          AngularFireDatabaseModule
  ],
  declarations: [MyFilesPage,
      FormatFileSizePipe],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MyFilesPageModule {}
