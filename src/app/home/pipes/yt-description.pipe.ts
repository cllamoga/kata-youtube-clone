import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ytDescription'
})
export class YtDescriptionPipe implements PipeTransform {

  transform(description: string): string {
    if (description.length <= 90) {
      return description;
    } else {
      return description.slice(0, 90).trim() + ' ...';
    }
  }

}
