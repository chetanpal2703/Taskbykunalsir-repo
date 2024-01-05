import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { BuyDialogComponent } from '../buy-dialog/buy-dialog.component';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnChanges {
  totalitem:number=0;
  totalprice:number=0;
  showproperty:any;
  @Input() receivedParticularItem: any;
  @Input() billing: { totalPrice: number, totalCount: number };
  // dialog: any;
  constructor(private dialog: MatDialog) {}
  ngOnChanges(changes: SimpleChanges) {
    if (changes['receivedParticularItem']) {
      console.log('Received Data in Description:', this.receivedParticularItem);
      console.log(this.billing,"billing-details")
      this.totalitem=this.billing.totalCount;
      this.totalprice=this.billing.totalPrice;
      this.showproperty=this.receivedParticularItem;
    }
  }
  
  buyAllProduct(){
    // Open the dialog when the user clicks "Buy All Product"
    const dialogRef = this.dialog.open(BuyDialogComponent, {
      width: '300px', // Adjust the width as needed
      data: { totalitem: this.totalitem, totalprice: this.totalprice }
    });
    dialogRef.componentInstance.descriptionComponent = this;
    // Handle the dialog result
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // User clicked "Buy", implement the logic here
        console.log('User clicked "Buy"');
        this.resetValues();

      } else {
        // User clicked "Cancel", implement the logic here
        console.log('User clicked "Cancel"');
      }
    });
  }

  resetValues() {
    this.totalitem = 0;
    this.totalprice = 0;
    this.showproperty = null; // Reset displayed item
    // ... reset other properties as needed
  }
}
