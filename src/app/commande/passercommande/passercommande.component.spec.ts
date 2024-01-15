import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassercommandeComponent } from './passercommande.component';

describe('PassercommandeComponent', () => {
  let component: PassercommandeComponent;
  let fixture: ComponentFixture<PassercommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassercommandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassercommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
