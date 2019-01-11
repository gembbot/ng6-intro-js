import { TestBed, inject } from '@angular/core/testing';

import { Ng6IntroJsService } from './ng6-intro-js.service';

describe('NgIntroJsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Ng6IntroJsService]
    });
  });

  it('should be created', inject([Ng6IntroJsService], (service: Ng6IntroJsService) => {
    expect(service).toBeTruthy();
  }));
});
