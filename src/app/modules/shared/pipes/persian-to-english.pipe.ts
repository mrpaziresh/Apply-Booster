import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'persiantoenglish',
})
export class PersianToEnglishPipe implements PipeTransform {
  transform(value): string {
    console.log(typeof value, value);
    if (value) {
      const persianNumber = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
      for (let i = 0; i < 10; i++) {
        const persianDigit = new RegExp(persianNumber[i], 'g');
        value = value.replace(persianDigit, i.toString());
      }
      console.log(typeof value, value);
    }
    return value;
  }
}
