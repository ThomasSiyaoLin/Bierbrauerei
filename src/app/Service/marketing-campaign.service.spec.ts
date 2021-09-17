import { TestBed } from '@angular/core/testing';

import { MarketingCampaignService } from './marketing-campaign.service';

describe('MarketingCampaignService', () => {
  let service: MarketingCampaignService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarketingCampaignService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
