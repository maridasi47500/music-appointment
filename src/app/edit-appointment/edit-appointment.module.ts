import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { EditAppointmentPageRoutingModule } from './edit-appointment-routing.module';

import { EditAppointmentPage } from './edit-appointment.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
export class MakeAppointmentPageModule { }

@NgModule({
  imports: [
    CommonModule,
		      ReactiveFormsModule,
    FormsModule,
    IonicModule,
    EditAppointmentPageRoutingModule
  ],
  declarations: [EditAppointmentPage]
})
export class EditAppointmentPageModule {}
