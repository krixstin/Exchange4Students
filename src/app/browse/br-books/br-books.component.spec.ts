import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrBooksComponent } from './br-books.component';

describe('BrBooksComponent', () => {
  let component: BrBooksComponent;
  let fixture: ComponentFixture<BrBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
