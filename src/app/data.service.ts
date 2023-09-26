import { Injectable } from '@angular/core';
import { AngularFireStorage,AngularFireUploadTask } from 'angularfire2/storage';
import { AngularFireDatabase } from 'angularfire2/database';
import { map, filter, scan } from 'rxjs/operators';

@Injectable()
export class DataProvider {

	  constructor(private db: AngularFireDatabase, private afStorage: AngularFireStorage) { }

	    getFiles() {
		        let ref = this.db.list('files');

			    return ref.snapshotChanges().pipe(map((changes:any) => {
				          return changes.map((c:any) => ({ key: c.payload.key, ...c.payload.val() }));
					      }));
					        }

						  uploadToStorage(information:any): AngularFireUploadTask {
							      let newName = `${new Date().getTime()}.txt`;

							          return this.afStorage.ref(`files/${newName}`).putString(information);
								    }

								      storeInfoToDatabase(metainfo:any) {
									          let toSave = {
											        created: metainfo.timeCreated,
												      url: metainfo.downloadURLs[0],
												            fullPath: metainfo.fullPath,
													          contentType: metainfo.contentType
														      }
														          return this.db.list('files').push(toSave);
															    }


															      deleteFile(file:any) {
																          let key = file.key;
																	      let storagePath = file.fullPath;

																	          let ref = this.db.list('files');

																		      ref.remove(key);
																		          return this.afStorage.ref(storagePath).delete();
																			    }
}
