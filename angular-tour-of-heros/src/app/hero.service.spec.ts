import { TestBed } from '@angular/core/testing';

import { HeroService } from './hero.service';
import { MessageService } from './message.service';

describe('HeroService', () => {
  let service: HeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: MessageService, useClass: MessageService}
      ]

    });
    service = TestBed.inject(HeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
