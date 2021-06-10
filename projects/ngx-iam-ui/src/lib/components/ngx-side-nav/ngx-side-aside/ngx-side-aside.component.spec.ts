import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSideAsideComponent } from './ngx-side-aside.component';

describe('NgxSideAsideComponent', () => {
  let component: NgxSideAsideComponent;
  let fixture: ComponentFixture<NgxSideAsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgxSideAsideComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSideAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
