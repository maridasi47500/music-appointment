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
									              this.Bookings.push(a as Appointment);
										            });
											        });
		          this.fetchSongs();
			      let songRes = this.songService.getSongList();
			          songRes.snapshotChanges().subscribe((res) => {
					        this.Songs = [];
						      res.forEach((item) => {
							              let a: any = item.payload.toJSON();
								              a['$key'] = item.key;
									              this.Songs.push(a as Song);
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


}
