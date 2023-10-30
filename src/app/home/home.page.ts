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
	currentTimeContainer:any="00:00";
	durationContainer:any="00:00";
	playpause:any="";
	slidervalue:any=0.0;
	sliderMax:any=100.0;
	  Bookings: any = [];
	  mykeys: any = [];
	  mysrc: string="";
	  mySongs: any = {};
	  audio:any;

	  Songs: any = [];
	    constructor(private aptService: AppointmentService, private songService: SongService) {}
	      ngOnInit() {
																									  this.audio = new Audio(); 
																									  this.audio.addEventListener('timeupdate', () => {
  this.currentTimeContainer = this.calculateTime(this.audio.currentTime);
  this.durationContainer = this.calculateTime(this.audio.duration);
  this.slidervalue = Math.floor(this.audio.currentTime);
});
if (this.audio.readyState > 0) {
  this.displayDuration()
  this.setSliderMax()
} else {
  this.audio.addEventListener('loadedmetadata', () => {
    this.displayDuration()
  this.setSliderMax() 
  })
}
		          this.fetchBookings()
			      let bookingRes = this.aptService.getBookingList()
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

																								calculateTime (secs:any)  {
  const minutes = Math.floor(secs / 60);
  const seconds = Math.floor(secs % 60);
  const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`
  return `${minutes}:${returnedSeconds}`
}

displayDuration () {
  this.durationContainer = this.calculateTime(this.audio.duration)
  this.slidervalue = Math.floor(this.audio.currentTime)
}
																								pausemusic(){
																									  if(this.audio && !this.audio.paused){
																										  this.audio.pause()
																										  //this.audio.currentTime=0
																									  this.playpause="play"
																									  }else if(this.audio){
																										  this.audio.play()
																									  this.playpause="pause"
																									  }
																								}


																								jouer(url: string){
																									
																									  if(this.audio){
																									  if(!this.audio.paused){

																										  this.audio.pause()
																									  }
																										  this.audio.currentTime=0

																									  }

																									  this.audio.src = url

																									  //this.audio.load()
																									  this.audio.play()
																									  this.playpause="pause"


																								}
																								jouerchanson($ev:any){
																									  $ev.target.play()
																								}
																							setSliderMax() {
  this.sliderMax = Math.floor(this.audio.duration)
}

myInput($ev:any){
	  this.currentTimeContainer = this.calculateTime($ev.target.value)
	  

}
myClick($ev:any){

}
myChange($ev:any){
	this.audio.currentTime=$ev.target.value

}

}
