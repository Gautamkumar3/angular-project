import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankChargeComponent } from './bank-charge.component';

describe('BankChargeComponent', () => {
  let component: BankChargeComponent;
  let fixture: ComponentFixture<BankChargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankChargeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankChargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
