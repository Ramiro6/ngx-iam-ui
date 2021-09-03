import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgTitlePanelComponent } from './pg-title-panel.component';

describe('CardComponent', () => {
  let component: PgTitlePanelComponent;
  let fixture: ComponentFixture<PgTitlePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PgTitlePanelComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PgTitlePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
