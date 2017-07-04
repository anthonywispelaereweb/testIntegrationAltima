import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerRelaxComponent } from './banner-relax.component';

describe('BannerRelaxComponent', () => {
  let component: BannerRelaxComponent;
  let fixture: ComponentFixture<BannerRelaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerRelaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerRelaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
