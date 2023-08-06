import { Component } from '@angular/core';
import{ FormBuilder, FormArray, Validators } from '@angular/forms'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'forms';
  constructor(private fb: FormBuilder){
  }

  formDetails = this.fb.group({
    name: this.fb.group({
      firstName:['', Validators.required ],
      middleName:['', Validators.required],
      LastName:['', Validators.required]
    }),
    phoneNo: ['', Validators.required],
    email: ['', Validators.required],
    dateOfBirth:['', Validators.required],
    permanentAddress: this.fb.group({
      provience:['', Validators.required],
      district:['', Validators.required],
      municipality:['', Validators.required],
      villageName:['', Validators.required],
      wardNo:['', Validators.required]
    }),
    eduQulification:['', Validators.required],
    familyDetails: this.fb.group({
      grandFatherName: ['', Validators.required],
      fatherName:['', Validators.required],
      motherName:['', Validators.required],
    }),
    photo: ['', Validators.required]
  })
}
