import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyLandingUseComponent } from './body-landing-use.component';

describe('BodyLandingUseComponent', () => {
  let component: BodyLandingUseComponent;
  let fixture: ComponentFixture<BodyLandingUseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodyLandingUseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyLandingUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
