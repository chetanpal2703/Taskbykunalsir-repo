import { Component,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-buy-dialog',
  templateUrl: './buy-dialog.component.html',
  styleUrls: ['./buy-dialog.component.scss']
})
export class BuyDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<BuyDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { totalitem: number, totalprice: number }
  ) { }

  onBuy(): void {
    // Implement the logic when the user clicks the "Buy" button
    // You can close the dialog and perform any other necessary actions.
    this.dialogRef.close(true);
  }

  onCancel(): void {
    // Implement the logic when the user clicks the "Cancel" button
    // You can close the dialog and perform any other necessary actions.
    this.dialogRef.close(false);
  }
}
