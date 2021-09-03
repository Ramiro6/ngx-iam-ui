import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTabRouterComponent } from './ngx-tab-router.component';

describe('NgxTreeComponent', () => {
  let component: NgxTabRouterComponent;
  let fixture: ComponentFixture<NgxTabRouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgxTabRouterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxTabRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
