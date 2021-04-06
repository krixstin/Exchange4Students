import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrElectronicsComponent } from './br-electronics.component';

describe('BrElectronicsComponent', () => {
  let component: BrElectronicsComponent;
  let fixture: ComponentFixture<BrElectronicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrElectronicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrElectronicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
