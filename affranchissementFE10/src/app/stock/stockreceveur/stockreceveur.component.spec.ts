import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockreceveurComponent } from './stockreceveur.component';

describe('StockreceveurComponent', () => {
  let component: StockreceveurComponent;
  let fixture: ComponentFixture<StockreceveurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockreceveurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockreceveurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
