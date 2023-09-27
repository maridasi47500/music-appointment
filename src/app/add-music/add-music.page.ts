import { Component } from '@angular/core';
import { Directive, Input } from '@angular/core'; 

import { ModalController } from '@ionic/angular';

@Component({
	  selector: 'add-music-page',
	    templateUrl: 'add-music.page.html',
	      styleUrls: ['./add-music.page.scss'],
})
export class AddMusicPage {
	  name: string;
	  @Input() myfilename: any;

	    constructor(private modalCtrl: ModalController) {}

	      cancel() {
		          return this.modalCtrl.dismiss(null, 'cancel');
			    }

			      confirm() {
				          return this.modalCtrl.dismiss(this.name, 'confirm');
					    }
}
