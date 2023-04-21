import * as moment from 'moment';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(timestamp: number, format: string): string {
    return moment.unix(timestamp).format(format);
  }

}
