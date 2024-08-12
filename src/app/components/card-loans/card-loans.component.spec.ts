import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLoansComponent } from './card-loans.component';

describe('CardLoansComponent', () => {
  let component: CardLoansComponent;
  let fixture: ComponentFixture<CardLoansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardLoansComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardLoansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
