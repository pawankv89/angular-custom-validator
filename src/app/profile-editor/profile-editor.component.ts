// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { FormValidator } from '../form-validator/form-validator'

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.scss']
})
export class ProfileEditorComponent implements OnInit {

  userNameDuplicate = false;
  profileForm = new FormGroup({
    userName: new FormControl('', FormValidator.duplicateValidator(this.userNameDuplicate)),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', FormValidator.cannotContainSpace),
    //age: new FormControl('', FormValidator.ageRangeValidator),
    age: new FormControl('', FormValidator.ageRangeValidator(18,45)),
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
    console.log('Form', this.profileForm.value);
    console.error('Form', this.profileForm.value);
    console.info('Form', this.profileForm.value);
    console.debug('Form', this.profileForm.value);
  }

  onUpdateDuplicate() {
    console.log('Form', this.profileForm.value, this.userNameDuplicate);
    if (this.userNameDuplicate === false) {
      this.userNameDuplicate = true;
      this.profileForm.controls.userName.setValidators([FormValidator.duplicateValidator(this.userNameDuplicate)]);
      this.profileForm.controls.userName.updateValueAndValidity();
    } else {
      this.userNameDuplicate = false;
      this.profileForm.controls.userName.setValidators([FormValidator.duplicateValidator(this.userNameDuplicate)]);
      this.profileForm.controls.userName.updateValueAndValidity();
    }
  }
}
