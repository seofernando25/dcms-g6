import { Component, OnInit, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Console } from 'console';

import { PostgrestResponse } from '@supabase/supabase-js';
import { SupabaseService } from 'src/app/services/supabase.service';

export interface procedure {
  procedure_type_id: number;
  procedure_id: number;
  tooth: string;
  comments: string;
  quantity: number;
}

@Component({
  selector: 'app-search-appointment-detail',
  templateUrl: './search-appointment-detail.component.html',
  styleUrls: ['./search-appointment-detail.component.scss'],
})
export class SearchAppointmentDetailComponent implements OnInit {
  displayedColumns: string[] = [
    'procedure_id',
    'procedure_type_id',
    'tooth',
    'comments',
    'quantity',
  ];
  dataSource = new MatTableDataSource<procedure>([]);

  AppointmentDetailForm = new FormGroup({
    patient_first_name: new FormControl(''),
    patient_middle_name: new FormControl(''),
    patient_last_name: new FormControl(''),
    patient_phone_number: new FormControl(''),
    dentist_first_name: new FormControl(''),
    dentist_middle_name: new FormControl(''),
    dentist_last_name: new FormControl(''),
    dentist_phone_number: new FormControl(''),
  });

  constructor(
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    public dialog: MatDialog,
    private supabase: SupabaseService
  ) {}

  ngOnInit(): void {
    console.log('EDIT DATA', this.editData.appointment_id);
    let sb = this.supabase._supabase;
    sb.from('person')
      .select('*')
      .eq('auth_id', this.editData.patient_id)
      .then((data) => {
        //console.log('Data', data.body);
        this.AppointmentDetailForm.patchValue({
          patient_first_name: data.body?.at(0).first_name,
          patient_middle_name: data.body?.at(0).middle_name,
          patient_last_name: data.body?.at(0).last_name,
          patient_phone_number: data.body?.at(0).phone_number,
        });
      });
    sb.from('person')
      .select('*')
      .eq('auth_id', this.editData.dentist_id)
      .then((data) => {
        //console.log('Data', data.body);
        this.AppointmentDetailForm.patchValue({
          dentist_first_name: data.body?.at(0).first_name,
          dentist_middle_name: data.body?.at(0).middle_name,
          dentist_last_name: data.body?.at(0).last_name,
          dentist_phone_number: data.body?.at(0).phone_number,
        });
      });
    sb.from('appointment_procedure')
      .select('*')
      .eq('appointment_id', this.editData.appointment_id)
      .then((data) => {
        //console.log('Data', data.body);
        this.updateData(data);
      });
  }

  updateData(data: PostgrestResponse<any>) {
    if (data.error) {
      console.log('data.error: ', data.error);
    } else {
      console.log('data.body: ', data);
      this.dataSource.data = data.body;
    }
  }

  closeDialog() {
    this.dialog.closeAll();
  }
}
