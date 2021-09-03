import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCardPageComponent } from './ngx-card-page.component';

describe('NgxIamUiComponent', () => {
  let component: NgxCardPageComponent;
  let fixture: ComponentFixture<NgxCardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgxCardPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxCardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
