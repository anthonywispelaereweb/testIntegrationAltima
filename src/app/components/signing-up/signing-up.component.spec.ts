import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigningUpComponent } from './signing-up.component';

describe('SigningUpComponent', () => {
  let component: SigningUpComponent;
  let fixture: ComponentFixture<SigningUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigningUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigningUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
