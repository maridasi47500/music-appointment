import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import {
	  AngularFireStorage,
	    AngularFireUploadTask,
} from '@angular/fire/compat/storage';
import {
	  AngularFirestore,
	    AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { ModalController } from '@ionic/angular';
import { AddMusicPage } from '../add-music/add-music.page';
import { ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { SongService } from './../shared/song.service';
import { Router } from '@angular/router';
import { Song } from '../shared/Song';


export interface imgFile {
	  name: string;
	    filepath: string;
	      size: number;
}
export interface musicFile {
	  name: string;
	    filepath: string;
	      size: number;
	      title: string;
	      artist:string;
	      
}

@Component({
	  selector: 'app-home',
	    templateUrl: 'my-files.page.html',
	      styleUrls: ['my-files.page.scss'],
})
export class MyFilesPage {
	  message = 'This modal example uses the modalController to present and dismiss modals.';
	  myfilename:string="";
	  artist:string="";
	  title:string="";
	    @ViewChild(IonModal) modal: IonModal;
	      cancel() {
		          this.modal.dismiss(null, 'cancel');
			    }

			      confirm() {
				          this.modal.dismiss({artist: this.artist, title: this.title}, 'confirm');
					    }

					      onWillDismiss(event: Event) {
						          const ev = event as CustomEvent<OverlayEventDetail<string>>;
 const activeTabPage = document.querySelector('.md.ion-page.hydrated') as HTMLInputElement;
if (activeTabPage){
    activeTabPage.style.zIndex ="0";
}
							      if (ev.detail.role === 'confirm') {
								            this.message = `Hello, ${ev.detail.data}!`;
									        }
										  }
										  openmymodal(){
											  

 const activeTabPage = document.querySelector('.md.ion-page.hydrated') as HTMLInputElement;
if (activeTabPage){
    activeTabPage.style.zIndex ="1";
}
										  }


	// File upload task
	   fileUploadTask: AngularFireUploadTask;
	     // Upload progress
	       percentageVal: Observable<any>;
	         // Track file uploading with snapshot
	           trackSnapshot: Observable<any>;
	             // Uploaded File URL
	               UploadedImageURL: Observable<string>;
	                 // Uploaded image collection
	                   files: Observable<musicFile[]>;
	                     // Image specifications
	                       imgName: string;
	                         imgSize: number;
	                           // File uploading status
	                             isFileUploading: boolean;
	                               isFileUploaded: boolean;
	                                 private filesCollection: AngularFirestoreCollection<musicFile>;
	                                   constructor(
	                                       private router: Router,
	                                       private songService: SongService,
	                                       private afs: AngularFirestore,
					       private modalCtrl: ModalController,
	                                           private afStorage: AngularFireStorage
	                                             ) {
	                                                 this.isFileUploading = false;
	                                                     this.isFileUploaded = false;
	                                                         // Define uploaded files collection
	                                                             this.filesCollection = afs.collection<musicFile>('imagesCollection');
	                                                                 this.files = this.filesCollection.valueChanges();
	                                                                   }
									     async openModal() {
										         const modal = await this.modalCtrl.create({
												       component: AddMusicPage,cssClass: "modal-fullscreen",
												       componentProps: { myfilename: this.myfilename }
												           });
 const activeTabPage = document.querySelector('.ion-page') as HTMLInputElement;
if (activeTabPage){
    activeTabPage.style.zIndex ="1";
}
                                                                                                         modal.present();

                                                                                                            const { data, role } = await modal.onWillDismiss();
                                                                                                 activeTabPage.style.zIndex = "0";

                                                                                                            if (role === 'confirm') {
                                                                                                              this.message = `Hello, ${data}!`;
                                                                                                            }

													           


																	   }
	                                                                     uploadImage(event: FileList) {
	                                                                         const file: any = event.item(0);
	                                                                             // Image validation
	                                                                                 if (file.type.split('/')[0] !== 'audio') {
	                                                                                       console.log('File type is not supported!');
	                                                                                             return;
	                                                                                                 }
	                                                                                                     this.isFileUploading = true;
	                                                                                                         this.isFileUploaded = false;
	                                                                                                             this.imgName = file.name;
	                                                                                                                 // Storage path
	                                                                                                                     const fileStoragePath = `filesStorage/${new Date().getTime()}_${file.name}`;
	                                                                                                                         // Image reference
	                                                                                                                             const imageRef = this.afStorage.ref(fileStoragePath);
	                                                                                                                                 // File upload task
	                                                                                                                                     this.fileUploadTask = this.afStorage.upload(fileStoragePath, file);
	                                                                                                                                         // Show uploading progress
	                                                                                                                                             this.percentageVal = this.fileUploadTask.percentageChanges();
	                                                                                                                                                 this.trackSnapshot = this.fileUploadTask.snapshotChanges().pipe(
	                                                                                                                                                       finalize(() => {
	                                                                                                                                                               // Retreive uploaded image storage path
	                                                                                                                                                                       this.UploadedImageURL = imageRef.getDownloadURL();
	                                                                                                                                                                               this.UploadedImageURL.subscribe(
	                                                                                                                                                                                         (resp) => {
																									 var myhash={
	                                                                                                                                                                                                                   name: file.name,
	                                                                                                                                                                                                                                 filepath: resp,
	                                                                       artist:this.artist,
title: this.title,									       size: this.imgSize,
	                                                                                                                                                                                                                                                           };
																																   var mysong=new Song;
																																   mysong.name = file.name;
	                                                               mysong.artist = this.artist;
	                                                               mysong.filepath = resp;
                                                                       mysong.title = this.title;
                                                                       mysong.size = this.imgSize;
	                                                                                                                                                                                                     this.storeFilesFirebase(myhash);
	                                                                                                                                                                                                                                                                       this.isFileUploading = false;
	                                                                                                                                                                                                                                                                                   this.isFileUploaded = true;
																																			   this.songService
																																			           .createSong(mysong)
																																				           .then((res) => {
																																						             console.log(res);
																																								                 this.router.navigate(['/home']);
																																										         })
																																											         .catch((error: any) => console.log(error));

	                                                                                                                                                                                                                                                                                             },
	                                                                                                                                                                                                                                                                                                       (error) => {
	                                                                                                                                                                                                                                                                                                                   console.log(error);
	                                                                                                                                                                                                                                                                                                                             }
	                                                                                                                                                                                                                                                                                                                                     );
	                                                                                                                                                                                                                                                                                                                                           }),
	                                                                                                                                                                                                                                                                                                                                                 tap((snap: any) => {
	                                                                                                                                                                                                                                                                                                                                                         this.imgSize = snap.totalBytes;
	                                                                                                                                                                                                                                                                                                                                                               })
	                                                                                                                                                                                                                                                                                                                                                                   );
	                                                                                                                                                                                                                                                                                                                                                                     }
	                                                                                                                                                                                                                                                                                                                                                                       storeFilesFirebase(image: musicFile) {
	                                                                                                                                                                                                                                                                                                                                                                           const fileId = this.afs.createId();
	                                                                                                                                                                                                                                                                                                                                                                               this.filesCollection
	                                                                                                                                                                                                                                                                                                                                                                                     .doc(fileId)
	                                                                                                                                                                                                                                                                                                                                                                                           .set(image)
	                                                                                                                                                                                                                                                                                                                                                                                                 .then((res) => {
	                                                                                                                                                                                                                                                                                                                                                                                                         console.log(res);
	                                                                                                                                                                                                                                                                                                                                                                                                               })
	                                                                                                                                                                                                                                                                                                                                                                                                                     .catch((err) => {
	                                                                                                                                                                                                                                                                                                                                                                                                                             console.log(err);
	                                                                                                                                                                                                                                                                                                                                                                                                                                   });
	                                                                                                                                                                                                                                                                                                                                                                                                                                     }
	                                                                                                                                                                                                                                                                                                                                                                                                                                     }
