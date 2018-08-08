import { AbstractControl } from '@angular/forms'

export function ValidatePassword(control: AbstractControl) {
  let minlength = false;
  let lowercase = false;
  let uppercase = false;
  let specialchar = false;
  let numeral = false;
  if (control.value) {
    minlength = control.value.length >= 8;
    lowercase = /[a-z]/.test(control.value);
    uppercase = /[A-Z]/.test(control.value);
    specialchar = /^[a-zA-Z0-9]/.test(control.value);
    numeral = /[0-9]/.test(control.value);
    let valid = minlength && lowercase && uppercase && specialchar && numeral;
    if(valid){
      return null;
    }
  }
  return {
    'Minlength': minlength,
    'Lowercase': lowercase,
    'Uppercase': uppercase,
    'Specialchar': specialchar,
    'Numeral': numeral
  };
}