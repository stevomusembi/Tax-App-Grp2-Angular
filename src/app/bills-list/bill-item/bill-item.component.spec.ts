import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillItemComponent } from './bill-item.component';

describe('BillItemComponent', () => {
  let component: BillItemComponent;
  let fixture: ComponentFixture<BillItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
