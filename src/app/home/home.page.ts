import { Component, OnInit } from '@angular/core';
import { Appointment } from '../shared/Appointment';
import { AppointmentService } from './../shared/appointment.service';
import { Song } from '../shared/Song';
import { SongService } from './../shared/song.service';
@Component({
	  selector: 'app-home',
	    templateUrl: 'home.page.html',
	      styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
	  Bookings: any = [];
	  mykeys: any = [];
	  mysrc: string="";
	  mySongs: any = {};
	  audio:any;
	  Songs: any = [];
	    constructor(private aptService: AppointmentService, private songService: SongService) {}
	      ngOnInit() {
		          this.fetchBookings();
			      let bookingRes = this.aptService.getBookingList();
			          bookingRes.snapshotChanges().subscribe((res) => {
					        this.Bookings = [];
						      res.forEach((item) => {
							              let a: any = item.payload.toJSON();
								              a['$key'] = item.key;
									              this.Bookings.push(a as Appointment)

										            });
											        });
		          this.fetchSongs();
			      let songRes = this.songService.getSongList();
			          songRes.snapshotChanges().subscribe((res) => {
					        this.mySongs = [];
						      res.forEach((item) => {
							              let a: any = item.payload.toJSON();
								              a['$key'] = item.key;

									              this.mySongs[a["title"][0]]||=[]
									              this.mySongs[a["artist"][0]]||=[]
									              this.mySongs[a["artist"][0]].push(a as Song)
									              this.mySongs[a["title"][0]].push(a as Song)

										      this.mykeys=Object.keys(this.mySongs).sort()
										            });
											        });
												  }
												    fetchBookings() {
													        this.aptService
														      .getBookingList()
														            .valueChanges()
															          .subscribe((res) => {
																	          console.log(res);
																		        });
																			  }
																			    deleteBooking(id: any) {
																				        console.log(id);
																					    if (window.confirm('Do you really want to delete?')) {
																						          this.aptService.deleteBooking(id);
																							      }
																							        }
												    fetchSongs() {
													        this.songService
														      .getSongList()
														            .valueChanges()
															          .subscribe((res) => {
																	          console.log(res);
																		        });
																			  }
																			    deleteSong(id: any) {
																				        console.log(id);
																					    if (window.confirm('Do you really want to delete?')) {
																						          this.songService.deleteSong(id);
																							      }
																							        }
																								download(url: string){
																									  window.open(url, "_blank");
																								}
																								pausemusic(){
																									  if(this.audio){
																										  this.audio.pause()
																										  this.audio.currentTime=0
																									  }
																								}
																								jouer(url: string){
																									  if(this.audio){
																										  this.audio.pause()
																										  this.audio.currentTime=0
																									  }
																									  this.audio = new Audio(); 
																									  this.audio.src = url
																									  this.audio.load()
																									  this.audio.play()

																								}
																								jouerchanson($ev:any){
																									  $ev.target.play()
																								}


}
