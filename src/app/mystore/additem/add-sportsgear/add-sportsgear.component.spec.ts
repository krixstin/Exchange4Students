import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSportsgearComponent } from './add-sportsgear.component';

describe('AddSportsgearComponent', () => {
  let component: AddSportsgearComponent;
  let fixture: ComponentFixture<AddSportsgearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSportsgearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSportsgearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
