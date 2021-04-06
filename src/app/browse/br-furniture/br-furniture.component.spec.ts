import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrFurnitureComponent } from './br-furniture.component';

describe('BrFurnitureComponent', () => {
  let component: BrFurnitureComponent;
  let fixture: ComponentFixture<BrFurnitureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrFurnitureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrFurnitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
