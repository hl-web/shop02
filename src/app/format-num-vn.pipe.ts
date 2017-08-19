import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatNumVN'
})
export class FormatNumVNPipe implements PipeTransform {

  transform(value: string): any {
    if (!value) return value;

    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

}
