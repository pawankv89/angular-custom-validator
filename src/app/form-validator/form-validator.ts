import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class FormValidator {
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') >= 0) {
      return { cannotContainSpace: true };
    }

    return null;
  }

//   static ageRangeValidator(control: AbstractControl): { [key: string]: boolean } | null {

//     if (control.value !== undefined && (isNaN(control.value) || control.value < 18 || control.value > 45)) {
//         return { ageRange: true };
//     }
//     return null;
//   }
  static ageRangeValidator(min: number, max: number): ValidatorFn {
  
    return (control: AbstractControl): { [key: string]: boolean } | null =>{
        if (control.value !== undefined && (isNaN(control.value) || control.value < 18 || control.value > 45)) {
            return { ageRange: true };
        }
        return null;
    }
  }

  static duplicateValidator(duplicate: boolean): ValidatorFn {
  
    return (control: AbstractControl): { [key: string]: boolean } | null =>{
        console.log('control ', control.value, duplicate);
        if (control.value !== undefined && (duplicate)) {
            return { duplicate: true };
        }
        return null;
    }
  }
}
