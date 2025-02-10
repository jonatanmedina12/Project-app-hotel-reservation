import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesSectionUserComponent } from './services-section-user.component';

describe('ServicesSectionUserComponent', () => {
  let component: ServicesSectionUserComponent;
  let fixture: ComponentFixture<ServicesSectionUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesSectionUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesSectionUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
