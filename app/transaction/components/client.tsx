"use client";

import { Button } from "@/components/ui/button";
import CartItem from "@/components/ui/cart-item";
import ProductCard from "@/components/ui/product-card";
import { Product } from "@/types";
import { useState } from "react";

interface Cart {
  productId: string;
  name: string;
  jumlah: number;
  price: number;
  totalPrice: number;
  imageUrl: string;
}

interface TransactionClientProps {
  data: Product[];
}

const TransactionClient: React.FC<TransactionClientProps> = ({ data }) => {
  const [carts, setCarts] = useState<Cart[]>([]);

  const addProduct = (product: Product) => {
    // Check if product exist in cart
    if (carts.find((item) => item.productId === product.id)) {
      // Tambahkan kuantitas dan ubah jumlah harga
      const updatedArray = carts.map((item) => {
        if (product.id === item.productId) {
          item.jumlah += 1;
          item.totalPrice = item.price * item.jumlah;
          return {
            ...item,
          };
        }
        return item;
      });

      setCarts(updatedArray);
    } else {
      // New product

      const cart: Cart = {
        name: product.name,
        productId: product.id,
        jumlah: 1,
        price: parseInt(product.price),
        totalPrice: parseInt(product.price),
        imageUrl: product.imageUrl,
      };

      setCarts((prevArray) => [...prevArray, cart]);
    }
  };

  const clearCart = () => {
    setCarts([]);
  };

  return (
    <div className="grid grid-cols-3 gap-3 h-[75vh]">
      <div className="col-span-2 overflow-auto" style={{ width: "inherit" }}>
        <div className="grid grid-cols-3 gap-4">
          {data.map((product) => (
            <ProductCard
              key={product.id}
              data={product}
              onClick={() => addProduct(product)}
            />
          ))}
        </div>
      </div>

      <div className="bg-white p-3 shadow-md rounded-md h-fit">
        <p className="text-xl text-center font-bold">Pesanan</p>

        {carts.map((cart) => (
          <CartItem key={cart.productId} data={cart} />
        ))}

        <Button
          variant="outline"
          className="border-red-500 text-red-500 hover:text-red-500 hover:bg-white w-full font-semibold mt-3"
          onClick={() => clearCart()}
        >
          Clear Cart
        </Button>
        <div className="flex gap-2 mt-3">
          <Button className="bg-green-600 w-full hover:bg-green-500">
            Save Bill
          </Button>
          <Button className="bg-green-600 w-full hover:bg-green-500">
            Print Bill
          </Button>
        </div>
        <Button className="w-full mt-3">Charge Rp. 40.000</Button>
      </div>
    </div>
  );
};

export default TransactionClient;
