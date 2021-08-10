import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSideNavPanelComponent } from './ngx-side-nav-panel.component';

describe('SidePanelComponent', () => {
  let component: NgxSideNavPanelComponent;
  let fixture: ComponentFixture<NgxSideNavPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgxSideNavPanelComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSideNavPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
