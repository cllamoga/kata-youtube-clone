import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ytViewCount'
})
export class YtViewCountPipe implements PipeTransform {

  transform(views: string): string {
    let number : number = parseInt(views)
    if (number >= 1000000) {
      return `${(number / 1000000).toFixed(1)}M  Views • `;
    } else if (number >= 1000) {
      return `${(number / 1000).toFixed(1)}k Views • `;
    } else {
      return `${number.toString()} • `;
    }
  }

}
