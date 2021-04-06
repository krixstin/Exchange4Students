import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrSportsgearComponent } from './br-sportsgear.component';

describe('BrSportsgearComponent', () => {
  let component: BrSportsgearComponent;
  let fixture: ComponentFixture<BrSportsgearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrSportsgearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrSportsgearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
