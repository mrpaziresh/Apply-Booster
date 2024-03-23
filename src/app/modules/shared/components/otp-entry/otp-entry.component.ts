import { Component, ElementRef, OnInit, ViewChild, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-otp-entry',
  templateUrl: './otp-entry.component.html',
  styleUrls: ['./otp-entry.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => OtpEntryComponent),
      multi: true
    }
  ]
})
export class OtpEntryComponent implements OnInit , ControlValueAccessor {
value : any;
public firstDigit : string;
public secondDigit : string;
public thirdDigit : string;
public fourthDigit : string;
public fifthDigit : string;
@ViewChild('firstInput') firstInputRef: ElementRef;

constructor() {
}
   

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.firstInputRef.nativeElement.focus();
  }

  writeValue(value: any) {
    this.value = value;
    
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  onChange: any = () => {};
  onTouched: any = () => {};

  onOtpInputChange(event: any, place : number) {
    if(place === 1) {
      this.firstDigit = event;
    } else if(place === 2) {
      this.secondDigit = event;
    } else if(place === 3) {
      this.thirdDigit = event;
    } else if(place === 4) {
      this.fourthDigit = event;
    } else if(place === 5) {
      this.fifthDigit = event;
    }

    // let otpString = place === 1 ? 
    // event + this.secondDigit + this.thirdDigit + this.fourthDigit + this.fifthDigit : place === 2 ?
    // this.firstDigit + event + this.thirdDigit + this.fourthDigit + this.fifthDigit : place === 3 ?
    // this.firstDigit + this.secondDigit + event + this.fourthDigit + this.fifthDigit : place === 4 ?
    // this.firstDigit + this.secondDigit + this.thirdDigit + event + this.fifthDigit :
    // this.firstDigit + this.secondDigit + this.thirdDigit + this.fourthDigit + event;
    let otpString = this.firstDigit + this.secondDigit + this.thirdDigit + this.fourthDigit + this.fifthDigit;
    this.value = otpString;
    console.log(otpString);
    if(!otpString.includes('undefined') && !otpString.includes('null')) this.onChange(this.value);
  }

  returnToPrevious(stepper : MatStepper) {
    stepper.previous()
  }

}
