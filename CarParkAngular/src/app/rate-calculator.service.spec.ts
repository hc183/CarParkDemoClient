import { TestBed, inject } from '@angular/core/testing';

import { RateCalculatorService } from './rate-calculator.service';

describe('RateCalculatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RateCalculatorService]
    });
  });

  it('should be created', inject([RateCalculatorService], (service: RateCalculatorService) => {
    expect(service).toBeTruthy();
  }));
});
