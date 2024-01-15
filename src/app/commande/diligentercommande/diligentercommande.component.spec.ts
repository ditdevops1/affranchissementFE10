import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiligentercommandeComponent } from './diligentercommande.component';

describe('DiligentercommandeComponent', () => {
  let component: DiligentercommandeComponent;
  let fixture: ComponentFixture<DiligentercommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiligentercommandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiligentercommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
