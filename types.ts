export interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
}

export interface Cart {
  productId: string;
  name: string;
  jumlah: number;
  price: number;
  totalPrice: number;
  imageUrl: string;
}
