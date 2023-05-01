import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'windDirection'
})
export class WindDirectionPipe implements PipeTransform {

  transform(angle: number|undefined): string {
    if (angle === undefined) {
      return '';
    }
    const directions = ['north', 'northEast', 'east', 'southEast', 'south', 'southWest', 'west', 'northWest'];
    const index = Math.round(angle / 45) % 8;
    return directions[index];
  }

}
