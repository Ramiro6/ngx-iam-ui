import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSidePanelComponent } from './ngx-side-panel.component';

describe('SidePanelComponent', () => {
  let component: NgxSidePanelComponent;
  let fixture: ComponentFixture<NgxSidePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxSidePanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSidePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
