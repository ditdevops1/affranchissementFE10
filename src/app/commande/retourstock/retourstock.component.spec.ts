import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetourstockComponent } from './retourstock.component';

describe('RetourstockComponent', () => {
  let component: RetourstockComponent;
  let fixture: ComponentFixture<RetourstockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetourstockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetourstockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
