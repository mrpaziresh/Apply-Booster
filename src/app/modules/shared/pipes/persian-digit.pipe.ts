import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'persianDigit'
})
export class PersianDigitPipe implements PipeTransform {
  transform(value: number | string): string {
    if (value === null || value === undefined) {
      return '';
    }
    return this.replaceEnglishWithPersian(value as string)
  }
  private replaceEnglishWithPersian(input: string): string {

    return input.replace(/\d/g, (d) => String.fromCharCode(d.charCodeAt(0) + 1728));
    
  }

  // replacePersianWithEnglish(input: string): string {
  //   return input.replace(/[\u0660-\u0669]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 1728));
  // }
}