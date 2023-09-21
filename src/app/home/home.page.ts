import { Component, OnInit } from '@angular/core';
import { Appointment } from '../shared/Appointment';
import { AppointmentService } from './../shared/appointment.service';
@Component({
	  selector: 'app-home',
	    templateUrl: 'home.page.html',
	      styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
	  Bookings: any = [];
	    constructor(private aptService: AppointmentService) {}
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
}
