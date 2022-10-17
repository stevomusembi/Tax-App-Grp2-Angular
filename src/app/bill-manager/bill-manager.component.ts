import { Component, OnInit } from '@angular/core';
import { BillItem } from 'src/billItem';
import { UpdateEvent } from '../bills-list/bills-list.component';


@Component({
  selector: 'app-bill-manager',
  templateUrl: './bill-manager.component.html',
  styleUrls: ['./bill-manager.component.scss']
})
export class BillManagerComponent implements OnInit {

  netPays:any = JSON.parse(sessionStorage.getItem('netPay')||'{}'); 
  bills!: string;
  billItems: BillItem[] = new Array<BillItem>();
  totalBudget: number = this.netPays;
  balance: number = 0;
  constructor() { }

  ngOnInit(): void {
  }
  addItem(newItem: BillItem) {
    this.billItems.push(newItem);
    this.totalBudget = this.netPays-newItem.amount;

  }
  deleteItem(item: BillItem) {
    console.log(item)
    let index = this.billItems.indexOf(item);
    this.billItems.splice(index, 1);
    this.totalBudget += item.amount;
  }
  updateItem(updateEvent: UpdateEvent) {
    // result is the update budget item
    // replace the item with the updated/submitted item from the form
    this.billItems[this.billItems.indexOf(updateEvent.old)] = updateEvent.new;

    // update the total budget
    this.totalBudget += updateEvent.old.amount;
    this.totalBudget -= updateEvent.new.amount;
  }

}
