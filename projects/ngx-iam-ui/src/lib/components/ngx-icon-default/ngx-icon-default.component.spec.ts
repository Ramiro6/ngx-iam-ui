import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxIconDefaultComponent } from './ngx-icon-default.component';

describe('NgxIconDefaultComponent', () => {
  let component: NgxIconDefaultComponent;
  let fixture: ComponentFixture<NgxIconDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgxIconDefaultComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxIconDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
