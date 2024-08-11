import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPendingReturnsComponent } from './modal-pending-returns.component';

describe('ModalPendingReturnsComponent', () => {
  let component: ModalPendingReturnsComponent;
  let fixture: ComponentFixture<ModalPendingReturnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalPendingReturnsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalPendingReturnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
