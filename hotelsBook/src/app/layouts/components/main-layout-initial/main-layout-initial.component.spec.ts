import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLayoutInitialComponent } from './main-layout-initial.component';

describe('MainLayoutInitialComponent', () => {
  let component: MainLayoutInitialComponent;
  let fixture: ComponentFixture<MainLayoutInitialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainLayoutInitialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainLayoutInitialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
