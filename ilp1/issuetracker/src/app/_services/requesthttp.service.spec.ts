import { TestBed } from '@angular/core/testing';

import { RequesthttpService } from './requesthttp.service';

describe('RequesthttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequesthttpService = TestBed.get(RequesthttpService);
    expect(service).toBeTruthy();
  });
});
