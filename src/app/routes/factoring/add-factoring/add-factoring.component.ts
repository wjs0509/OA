import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-factoring',
  templateUrl: './add-factoring.component.html',
  styleUrls:['./add-factoring.component.less']
})
export class AddFactoringComponent implements OnInit {
    validateForm: FormGroup;
    isVisible = false;

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

    check(){
      this.isVisible = true;
    }

    handleOk(): void {
      console.log('Button ok clicked!');
      this.isVisible = false;
    }
  
    handleCancel(): void {
      console.log('Button cancel clicked!');
      this.isVisible = false;
    }
}
