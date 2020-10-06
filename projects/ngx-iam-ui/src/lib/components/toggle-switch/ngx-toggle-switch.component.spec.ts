import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxToggleSwitchComponent } from './ngx-toggle-switch.component';

describe('NgxIamUiComponent', () => {
  let component: NgxToggleSwitchComponent;
  let fixture: ComponentFixture<NgxToggleSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxToggleSwitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxToggleSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
