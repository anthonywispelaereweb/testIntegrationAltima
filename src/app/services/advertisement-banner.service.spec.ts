import { TestBed, inject } from '@angular/core/testing';

import { AdvertisementBannerService } from './advertisement-banner.service';

describe('AdvertisementBannerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdvertisementBannerService]
    });
  });

  it('should be created', inject([AdvertisementBannerService], (service: AdvertisementBannerService) => {
    expect(service).toBeTruthy();
  }));
});
