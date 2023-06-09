import { Component } from '@angular/core';

// bu ikisi kardeşdir ayrılmazlar 

// app.component.html  olayın görüntüsü
// app.component.ts    Datayı yönettiğim yer


// burası imzadır sen bir classın ve componentsin unutma
@Component({
  selector: 'app-root', // html taglerine selector denir mesela index.htmle git orda göreceksin
  templateUrl: './app.component.html', // sen buranın datasını yöneteceksin.   ./ aynı klasörde demek
  styleUrls: ['./app.component.css']
})
export class AppComponent { // Component htlmin datasını yönettiğimiz yer
  title = 'northwind';
  user = "Keke"
  product: any = { productId: 1, productName: "Bardak", categoryId: 1, unitPrice: 5 } // {}=> bu obje demektir. any her şey olabilir demektir
  product1: any = { productId: 1, productName: "Laptop", categoryId: 1, unitPrice: 5 }
  product2: any = { productId: 1, productName: "Mouse", categoryId: 1, unitPrice: 5 }
  product3: any = { productId: 1, productName: "Keyboard", categoryId: 1, unitPrice: 5 }
  product4: any = { productId: 1, productName: "Camera", categoryId: 1, unitPrice: 5 }
  product5: any = { productId: 1, productName: "Table", categoryId: 1, unitPrice: 5 }

  products = [
    this.product,
    this.product1,
    this.product2,
    this.product3,
    this.product4,
    this.product5
  ]; // array yani liste demektir

}


