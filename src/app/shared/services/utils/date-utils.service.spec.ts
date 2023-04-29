import { TestBed } from '@angular/core/testing';

import { DateUtilsService } from './date-utils.service';

describe('DateUtilsService', () => {
  let service: DateUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return true for today\'s timestamp', () => {
    const today = Math.floor(Date.now() / 1000);
    expect(service.isToday(today)).toBe(true);
  });

  it('should return false for a timestamp from a different day', () => {
    const yesterday = Math.floor((Date.now() - 86400000) / 1000);
    expect(service.isToday(yesterday)).toBe(false);
  });

  it('should return false for a timestamp from a different year', () => {
    const lastYear = Math.floor((Date.now() - 31536000000) / 1000);
    expect(service.isToday(lastYear)).toBe(false);
  });
});
