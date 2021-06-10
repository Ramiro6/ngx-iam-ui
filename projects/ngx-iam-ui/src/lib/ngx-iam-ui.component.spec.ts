import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxIamUiComponent } from './ngx-iam-ui.component';

describe('NgxIamUiComponent', () => {
  let component: NgxIamUiComponent;
  let fixture: ComponentFixture<NgxIamUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgxIamUiComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxIamUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
