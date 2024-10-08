export interface Cart {
    id: number,
      img: string,
      date: Date,
      products: products
}

export interface products{
    productId:number,
   quantity:number,
   price: number
}