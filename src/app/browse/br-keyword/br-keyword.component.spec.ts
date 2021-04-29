import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrKeywordComponent } from './br-keyword.component';

describe('BrKeywordComponent', () => {
  let component: BrKeywordComponent;
  let fixture: ComponentFixture<BrKeywordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrKeywordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrKeywordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
