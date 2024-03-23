import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[maxLengthJump]',
})
export class MaxLengthJumpDirective {
  @Input() maxLengthJump: number; 

  constructor(private el: ElementRef) {
  }

  @HostListener('keyup', ['$event']) onKeypress(event: KeyboardEvent) {
    const inputElement: HTMLInputElement = this.el.nativeElement;
    const currentValue: any = inputElement.value;
    const currentLength: number = currentValue.length;
    const type = inputElement.type;
    let nextInputValue;
    
    
    
    if(event.key === 'Backspace'){
      // event.preventDefault();
        if( currentLength === 0 || !currentValue) {    
            const previousInput: HTMLInputElement = inputElement.previousSibling as HTMLInputElement;
            if (previousInput && previousInput.type === type) {
              inputElement.disabled = true;
              previousInput.focus();
            }
        } else {
          inputElement.value = '';
        }
    } else {
      console.log(event)
        if (currentLength === this.maxLengthJump || currentLength > this.maxLengthJump) {
          const nextInput: HTMLInputElement = inputElement.nextElementSibling as HTMLInputElement;
          if (nextInput && nextInput.type === type) {
            // nextInputValue = inputElement.value.slice(this.maxLengthJump, currentLength);
            // inputElement.value = inputElement.value.slice(0, this.maxLengthJump);
            nextInput.disabled = false;
            nextInput.focus();
            // console.log(nextInput.ru);
            
            // nextInput.value = nextInputValue;
          }
        }
    }
  }
}
