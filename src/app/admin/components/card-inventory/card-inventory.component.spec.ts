import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInventoryComponent } from './card-inventory.component';

describe('CardInventoryComponent', () => {
  let component: CardInventoryComponent;
  let fixture: ComponentFixture<CardInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardInventoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
