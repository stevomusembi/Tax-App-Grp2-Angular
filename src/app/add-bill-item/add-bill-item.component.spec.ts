import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBillItemComponent } from './add-bill-item.component';

describe('AddBillItemComponent', () => {
  let component: AddBillItemComponent;
  let fixture: ComponentFixture<AddBillItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBillItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBillItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
