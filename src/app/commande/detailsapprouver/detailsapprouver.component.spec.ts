import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsapprouverComponent } from './detailsapprouver.component';

describe('DetailsapprouverComponent', () => {
  let component: DetailsapprouverComponent;
  let fixture: ComponentFixture<DetailsapprouverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsapprouverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsapprouverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
