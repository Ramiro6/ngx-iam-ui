import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardApiComponent } from './card-api.component';

describe('CardComponent', () => {
  let component: CardApiComponent;
  let fixture: ComponentFixture<CardApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardApiComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
