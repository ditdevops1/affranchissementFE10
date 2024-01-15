import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockautrecaisseComponent } from './stockautrecaisse.component';

describe('StockautrecaisseComponent', () => {
  let component: StockautrecaisseComponent;
  let fixture: ComponentFixture<StockautrecaisseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockautrecaisseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockautrecaisseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
