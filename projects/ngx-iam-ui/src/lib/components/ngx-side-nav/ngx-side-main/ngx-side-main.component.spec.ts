import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSideMainComponent } from './ngx-side-main.component';

describe('NgxSideMainComponent', () => {
  let component: NgxSideMainComponent;
  let fixture: ComponentFixture<NgxSideMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxSideMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSideMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
