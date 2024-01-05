import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  billing: { totalPrice: number, totalCount: number } = { totalPrice: 0, totalCount: 0 };
  data:any;
  receivedSingleItemInfo:any;
  constructor(private http:HttpClient){
    this.http.get('https://dummyjson.com/products').subscribe((data:any)=>{
      console.log(data.products)
      this.data=data.products;
    })
  }

  onbtnClick(item:any){
    console.log(item)
    console.log("item",item.id);
    this.billing.totalCount+=1;
    this.billing.totalPrice+=item.price;
    this.receivedSingleItemInfo=item;
  }

  
}
