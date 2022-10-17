
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BillItem } from 'src/billItem';
import { MatDialog } from '@angular/material/dialog';
import { EditBillComponent } from '../edit-bill/edit-bill.component';

@Component({
  selector: 'app-bills-list',
  templateUrl: './bills-list.component.html',
  styleUrls: ['./bills-list.component.scss']
})
export class BillsListComponent implements OnInit {

  
  @Input()
  billItems!: BillItem[];
  @Output() delete: EventEmitter<BillItem> = new EventEmitter<BillItem>();
  @Output() update: EventEmitter<UpdateEvent> = new EventEmitter<UpdateEvent>();

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  onDeleteButtonClicked(item: BillItem) {
    this.delete.emit(item);
  }

  onCardClicked(item: BillItem) {
    // show the edit modal
    const dialogRef = this.dialog.open(EditBillComponent, {
      width: '580px',
      data: item
    });

    dialogRef.afterClosed().subscribe(result => {
      // check if result has a value
      if (result) {
        this.update.emit({
          old: item,
          new: result
        });
      }
    })
  }

}

export interface UpdateEvent {
  old: BillItem;
  new: BillItem;
}