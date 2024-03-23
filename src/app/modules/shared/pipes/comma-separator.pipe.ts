import { Pipe, PipeTransform } from '@angular/core';
@Pipe({name: 'commaSeparator'})
export class CommaSeparatorPipe implements PipeTransform {
  transform(value: string): any {
    let newValue = String(value);
    let decimal : string = '';
    if(newValue.includes('.')) {
        decimal = newValue.substring(newValue.indexOf('.'),newValue.length);
        newValue = newValue.substring(0,newValue.indexOf('.'));
    } 
    else {
      decimal = ''
    }
    newValue = newValue.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    newValue = newValue + decimal;
    
    return newValue;
  }
}