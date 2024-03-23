import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'comma-separator',
  templateUrl: './comma-separator.component.html',
  styleUrls: ['./comma-separator.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CommaSeparatorComponent),
      multi: true
    }
  ]
})

export class CommaSeparatorComponent implements OnInit, ControlValueAccessor {

  @Input() disabled: boolean = false;
  @Input() label: string;
  @Input() componentDisabled : boolean = false;
  @Input() inputMandatory : boolean = false;
  @Input() unit: string = undefined;
  price;


  constructor() { }


  value: any;



  ngOnInit() {
    // let tempUnit = this.unit;
    // this.unit = undefined;
    // setTimeout(()=> {
    //   this.unit = tempUnit;
    // },5000);
  }
  
  // setDisabledState(isDisabled: boolean): void {
  //   this.disabled = isDisabled;
  // }

  writeValue(value: any) {
    this.price = value;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
  valueEntered(event) {
    this.price = event;
    let newValue = event.replaceAll(/,/g, "");
    this.onChange(Number(newValue));
    console.log(event);
  }

  onChange: any = () => {};
  onTouched: any = () => {};

}
