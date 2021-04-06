import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrClothingComponent } from './br-clothing.component';

describe('BrClothingComponent', () => {
  let component: BrClothingComponent;
  let fixture: ComponentFixture<BrClothingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrClothingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrClothingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
