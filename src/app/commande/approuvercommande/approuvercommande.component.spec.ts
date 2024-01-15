import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprouvercommandeComponent } from './approuvercommande.component';

describe('ApprouvercommandeComponent', () => {
  let component: ApprouvercommandeComponent;
  let fixture: ComponentFixture<ApprouvercommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprouvercommandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprouvercommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
