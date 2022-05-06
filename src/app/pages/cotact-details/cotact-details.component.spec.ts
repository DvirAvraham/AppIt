import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CotactDetailsComponent } from './cotact-details.component';

describe('CotactDetailsComponent', () => {
  let component: CotactDetailsComponent;
  let fixture: ComponentFixture<CotactDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CotactDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CotactDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
