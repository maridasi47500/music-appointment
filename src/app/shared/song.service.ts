import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { Song } from '../shared/Song';
import { getStorage, ref, deleteObject } from "firebase/storage";

import {
	  AngularFireStorage
} from '@angular/fire/compat/storage';
import {
	  AngularFireDatabase,
	    AngularFireList,
	      AngularFireObject,
} from '@angular/fire/compat/database';
@Injectable({
	  providedIn: 'root',
})
export class SongService {
	  bookingListRef: AngularFireList<any>;
	    bookingRef: AngularFireObject<any>;
	      constructor(private db: AngularFireDatabase,private mystorage: AngularFireStorage) {}
	        // Create
	       createSong(apt: Song) {
	             return this.bookingListRef.push({
	                   name: apt.name,
	                         filepath: apt.filepath,
	                               size: apt.size,
	                               artist: apt.artist,
	                               title: apt.title,
	                                   });
	                                     }
	                                       // Get Single
	                                         getSong(id: string) {
	                                             this.bookingRef = this.db.object('/song/' + id);
	                                                 return this.bookingRef;
	                                                   }
	                                         getMySong(id: string) {
	                                             this.bookingRef = this.db.object('/song/' + id);
	                                                 return this.bookingRef.valueChanges();
	                                                   }
	                                                     // Get List
	                                                       getSongList() {
	                                                           this.bookingListRef = this.db.list('/song');
	                                                               return this.bookingListRef;
	                                                                 }
	                                                                   // Update
	                                                                     updateSong(id: any, apt: Song) {
	                                                                         return this.bookingRef.update({
	                                                                         name: apt.name,
	                                                                               filepath: apt.filepath,
	                                                                                     size: apt.size,
	                                                                                     artist: apt.artist,
	                                                                                     title: apt.title,
	                                                                                               });
	                                                                                                 }
	                                                                                                   // Delete
	                                                                                                     async deleteSong(id: string) {
														     var mysong=this.getMySong(id);
														     mysong.pipe(take(1)).subscribe(item => {
														     const storage = getStorage();
														     this.mystorage.storage.refFromURL(item.filepath.split("?")[0]).delete();


	                                                                                                         this.bookingRef = this.db.object('/song/' + id);
	                                                                                                             this.bookingRef.remove();
																         });




	                                                                                                               }
	                                                                                                               }
