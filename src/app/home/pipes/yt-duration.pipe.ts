import { Pipe, PipeTransform } from '@angular/core';
import { Duration } from "luxon";

@Pipe({
  name: 'ytDuration'
})
export class YtDurationPipe implements PipeTransform {

  transform(time: string): string {
    let timeFormatted: string | null;
    let timeFormatYT!: string;

    timeFormatted = Duration.fromISO(time).toISOTime({ suppressMilliseconds: true });
    if (!timeFormatted) return '';
    const [hours, minutes, seconds] = timeFormatted.split(':');
    if (hours === '00') {
      timeFormatYT = `${parseInt(minutes, 10)}:${seconds}`;
    } else if (minutes === '00' && seconds !== '00') {
      timeFormatYT = `${parseInt(hours, 10)}:${seconds}`;
    } else {
      timeFormatYT = `${parseInt(hours, 10)}:${minutes}:${seconds}`;
    }

    return timeFormatYT;
  }

}
