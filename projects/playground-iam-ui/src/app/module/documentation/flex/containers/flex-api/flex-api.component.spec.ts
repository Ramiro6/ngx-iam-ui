import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexApiComponent } from './flex-api.component';

describe('CardComponent', () => {
  let component: FlexApiComponent;
  let fixture: ComponentFixture<FlexApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlexApiComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
