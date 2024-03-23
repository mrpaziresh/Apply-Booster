import {
  Directive,
  HostListener,
  Renderer2,
  ElementRef,
  Input,
} from '@angular/core';

@Directive({
  selector: '[InputControlDirective]',
})

export class InputControlDirective {
  inputData: ElementRef;
  @Input('InputControlDirective') InputControlDirective: string;

  constructor(private renderer: Renderer2, private el: ElementRef) {
    this.inputData = el;
  }

  @HostListener('keypress', ['$event']) handleKeyPress(event: KeyboardEvent) {
    if (this.InputControlDirective === 'id') {
            if (
        this.inputData.nativeElement.value.length < 12 &&
        ((event.which > 47 && event.which < 58) ||
          (event.which > 1775 && event.which < 1786))
      ) {
        return true;
      } else {
        event.preventDefault();
        return false;
      }
    } else if (this.InputControlDirective === 'economicId') {
      if (
        this.inputData.nativeElement.value.length < 14 &&
        ((event.which > 47 && event.which < 58) ||
          (event.which > 1775 && event.which < 1786))
      ) {
        return true;
      } else {
        event.preventDefault();
        return false;
      }
    } else if (this.InputControlDirective === 'phoneNumber') {
      if (
        this.inputData.nativeElement.value.length < 11 &&
        ((event.which > 47 && event.which < 58) ||
          (event.which > 1775 && event.which < 1786))
      ) {
        return true;
      } else {
        event.preventDefault();
        return false;
      }
    } else if (this.InputControlDirective === 'postalCode') {
      if (
        this.inputData.nativeElement.value.length < 10 &&
        ((event.which > 47 && event.which < 58) ||
          (event.which > 1775 && event.which < 1786))
      ) {
        return true;
      } else {
        event.preventDefault();
        return false;
      }
    } else if (this.InputControlDirective === 'price' || this.InputControlDirective === 'number') {
      if (
        (event.which > 47 && event.which < 58) ||
        (event.which > 1775 && event.which < 1786)
      ) {
        return true;
      } else {
        event.preventDefault();
        return false;
      }
    } else if (this.InputControlDirective === 'weight') {
      if (
        (event.which > 47 && event.which < 58) ||
        event.which === 46 ||
        (event.which > 1775 && event.which < 1786) ||
        event.which === 46
      ) {
        return true;
      } else {
        event.preventDefault();
        return false;
      }
    } else if (this.InputControlDirective === 'persian-alphabet') {
      // console.log(event);
      if (
        (event.which >= 1570 &&
        event.which <= 1740) || 
        event.which === 32
      ) {
        return true;
      } else {
        event.preventDefault();
        return false;
        
      }
    }    
    else return true;
  }
}
