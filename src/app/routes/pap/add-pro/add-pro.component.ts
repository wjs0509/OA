import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 'app-add-pro',
  templateUrl: './add-pro.component.html',
  styleUrls: ['./add-pro.component.less']
})
export class AddProComponent implements OnInit {
  validateForm: FormGroup;

  constructor(
    private http: _HttpClient,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      companyName: [null, [Validators.required]],
      gtBeneficiaryName: [null, [Validators.required]],
      legal_representative_Name: [null, [Validators.required]],
      legal_representative_ID: [null, [Validators.required]],
      projName: [null, [Validators.required]],
      engineeringCategory: [null, [Validators.required]],
    });
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }

}
