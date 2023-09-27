import { Injectable } from '@angular/core';
import { Song } from '../shared/Song';
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
	      constructor(private db: AngularFireDatabase) {}
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
	                                                                                                     deleteSong(id: string) {
	                                                                                                         this.bookingRef = this.db.object('/song/' + id);
	                                                                                                             this.bookingRef.remove();
	                                                                                                               }
	                                                                                                               }
