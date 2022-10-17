import { Component, OnInit,Inject } from '@angular/core';
import { BillItem } from 'src/billItem';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-edit-bill',
  templateUrl: './edit-bill.component.html',
  styleUrls: ['./edit-bill.component.scss']
})
export class EditBillComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditBillComponent>,
    @Inject(MAT_DIALOG_DATA) public item: BillItem) { }

  ngOnInit() {
  }

  onSubmitted(updatedItem: BillItem) {
    this.dialogRef.close(updatedItem);
  }

}
