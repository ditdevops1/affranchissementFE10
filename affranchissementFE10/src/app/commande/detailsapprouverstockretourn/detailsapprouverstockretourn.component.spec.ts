import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsapprouverstockretournComponent } from './detailsapprouverstockretourn.component';

describe('DetailsapprouverstockretournComponent', () => {
  let component: DetailsapprouverstockretournComponent;
  let fixture: ComponentFixture<DetailsapprouverstockretournComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsapprouverstockretournComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsapprouverstockretournComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
