import { Component, OnInit,Input, Output, EventEmitter  } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BillItem } from 'src/billItem';
@Component({
  selector: 'app-add-bill-item',
  templateUrl: './add-bill-item.component.html',
  styleUrls: ['./add-bill-item.component.scss']
})
export class AddBillItemComponent implements OnInit {

  
  @Input()
  item!: BillItem;
  @Output() formSubmit: EventEmitter<BillItem> = new EventEmitter<BillItem>();
  isNewItem!: boolean;

  constructor() { }

  
  ngOnInit() {
    // if item has a value
    if (this.item) {
      // this means that an existing item object was passed into this component
      // therefore this is not a new item
      this.isNewItem = false;
    } else {
      this.isNewItem = true;
      this.item = new BillItem("", 0);
    }
  }

  onSubmit(form: NgForm) {
    this.formSubmit.emit(form.value);
    form.reset();
  }

}
