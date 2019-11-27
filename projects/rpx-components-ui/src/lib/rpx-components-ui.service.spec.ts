import { TestBed } from '@angular/core/testing';

import { RpxComponentsUiService } from './rpx-components-ui.service';

describe('RpxComponentsUiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RpxComponentsUiService = TestBed.get(RpxComponentsUiService);
    expect(service).toBeTruthy();
  });
});
