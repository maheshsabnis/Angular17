import { TestBed } from '@angular/core/testing';

import { CategoryHttpService } from './categoryr-http.service';

describe('CustomerHttpService', () => {
  let service: CategoryHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
