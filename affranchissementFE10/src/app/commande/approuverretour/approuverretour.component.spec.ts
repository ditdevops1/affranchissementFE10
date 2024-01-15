import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprouverretourComponent } from './approuverretour.component';

describe('ApprouverretourComponent', () => {
  let component: ApprouverretourComponent;
  let fixture: ComponentFixture<ApprouverretourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprouverretourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprouverretourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
