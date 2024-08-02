import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalLoansComponent } from './modal-loans.component';

describe('ModalLoansComponent', () => {
  let component: ModalLoansComponent;
  let fixture: ComponentFixture<ModalLoansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalLoansComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalLoansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
