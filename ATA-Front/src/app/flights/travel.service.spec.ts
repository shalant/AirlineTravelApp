import { TestBed } from '@angular/core/testing';

import { TravelService } from './travel.service';

describe('FlightService', () => {
  let service: TravelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
