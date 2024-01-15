import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaldetailsComponent } from './modaldetails.component';

describe('ModaldetailsComponent', () => {
  let component: ModaldetailsComponent;
  let fixture: ComponentFixture<ModaldetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModaldetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModaldetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
