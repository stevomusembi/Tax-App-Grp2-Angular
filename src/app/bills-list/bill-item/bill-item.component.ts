import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { BillItem } from 'src/billItem';

@Component({
  selector: 'app-bill-item',
  templateUrl: './bill-item.component.html',
  styleUrls: ['./bill-item.component.scss']
})
export class BillItemComponent implements OnInit {
  @Input()item!: BillItem;
  @Output() deleteButtonClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() itemClick: EventEmitter<any> = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit() {
  }

  onDeleteButtonClick() {
    // here we want emit an event
    this.deleteButtonClick.emit();
    console.log('delete')
  }

  onItemClick() {
    this.itemClick.emit();
  }

}
