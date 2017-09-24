import { TestBed, inject } from '@angular/core/testing';

import { ServiceHttpService } from './service-http.service';

describe('ServiceHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceHttpService]
    });
  });

  it('should be created', inject([ServiceHttpService], (service: ServiceHttpService) => {
    expect(service).toBeTruthy();
  }));
});
