import { DataService } from '../data';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
	  selector: 'page-my-files',
	    templateUrl: 'my-files.html',
})
export class MyFilesPage {
	  files: Observable<any[]>;

	    constructor(public navCtrl: NavController, private dataProvider: DataService, private alertCtrl: AlertController, private toastCtrl: ToastController) {
		        this.files = this.dataProvider.getFiles();
			  }

			    addFile() {
				        let inputAlert = this.alertCtrl.create({
						      title: 'Store new information',
						            inputs: [
								            {
										              name: 'info',
											                placeholder: 'Lorem ipsum dolor...'
													        }
														      ],
														            buttons: [
																            {
																		              text: 'Cancel',
																			                role: 'cancel'
																					        },
																						        {
																								          text: 'Store',
																									            handler: (data:any) => {
																											                this.uploadInformation(data.info);
																													          }
																														          }
																															        ]
																																    });
																																        inputAlert.present();
																																	  }

																																	    uploadInformation(text:any) {
																																		        let upload = this.dataProvider.uploadToStorage(text);

																																			    // Perhaps this syntax might change, it's no error here!
																																			     upload.then().then((res:any) => {
																																			           this.dataProvider.storeInfoToDatabase(res.metadata).then(() => {
																																			                   let toast = this.toastCtrl.create({
																																			                             message: 'New File added!',
																																			                                       duration: 3000
																																			                                               });
																																			                                                       toast.present();
																																			                                                             });
																																			                                                                 });
																																			                                                                   }
																																			
																																			                                                                     deleteFile(file:any) {
																																			                                                                         this.dataProvider.deleteFile(file).subscribe(() => {
																																			                                                                               let toast = this.toastCtrl.create({
																																			                                                                                       message: 'File removed!',
																																			                                                                                               duration: 3000
																																			                                                                                                     });
																																			                                                                                                           toast.present();
																																			                                                                                                               });
																																			                                                                                                                 }
																																			
																																			                                                                                                                   viewFile(url:any) {
																																			                                                                                                                       //this.iab.create(url);
																																			                                                                                                                         }
																																			                                                                                                                         }
