import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrItemComponent } from './br-item.component';

describe('BrItemComponent', () => {
  let component: BrItemComponent;
  let fixture: ComponentFixture<BrItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
