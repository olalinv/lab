import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'converter'
})
export class ConverterPipe implements PipeTransform {

  transform(num1: number, num2: number): number {
    const result = num1 * num2;
    return result;
  }

}
