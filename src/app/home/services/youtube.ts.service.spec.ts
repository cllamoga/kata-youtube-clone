import { TestBed } from '@angular/core/testing';

import { YoutubeTsService } from './youtube.ts.service';

describe('YoutubeTsService', () => {
  let service: YoutubeTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YoutubeTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
