import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddMusicPage } from './add-music.page';

const routes: Routes = [
  {
    path: '',
    component: AddMusicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddMusicPageRoutingModule {}
