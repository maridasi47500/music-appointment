import { Component } from '@angular/core';

import { ModalController } from '@ionic/angular';

@Component({
	  selector: 'add-music-page',
	    templateUrl: 'add-music.page.html',
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
