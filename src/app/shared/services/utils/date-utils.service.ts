import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateUtilsService {

  constructor() { }

  /**
   * Asserts that the given timestamp is today
   * @param timestamp 
   * @returns 
   */
  public isToday(timestamp: number): boolean {
    const today = new Date();
    const date = new Date(timestamp * 1000);
    return today.getDate() === date.getDate() &&
      today.getMonth() === date.getMonth() &&
      today.getFullYear() === date.getFullYear();
  }
}
