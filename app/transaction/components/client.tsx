"use client";

import { Button } from "@/components/ui/button";
import CartItem from "@/components/ui/cart-item";
import ProductCard from "@/components/ui/product-card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Product } from "@/types";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { Input } from "@/components/ui/input";
import TableFood from "./table-food";

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
  const [totalPriceInCarts, setTotalPriceInCarts] = useState<number>(0);

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
    countTotalPrices();
  };

  const clearCart = () => {
    setCarts([]);
    setTotalPriceInCarts(0);
  };

  const saveBill = () => {
    toast.success("Bill Saved Successfully");
  };

  const countTotalPrices = () => {
    console.log("carts ", carts);
    let totalPrice = 0;
    for (const item of carts) {
      totalPrice += item.totalPrice;
    }

    return totalPrice;
  };

  const ChargeBill = () => {
    return (
      <>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full mt-3" disabled={carts.length == 0}>
              Charge Rp. {countTotalPrices()}
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[1025px]">
            <DialogHeader>
              <DialogTitle>Detail Pesanan</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 grid-cols-5">
              <div className="col-span-3">
                <TableFood data={carts} />
              </div>
              <div className="text-center col-span-2 w-full">
                <p className="text-base font-semibold">Uang Pembeli (Rp.)</p>
                <Input className="mt-5 w-full" />

                <div className="mt-5 flex">
                  <Button type="submit" variant="outline" className="w-full">
                    Close
                  </Button>
                  <Button type="submit" className="w-full">
                    Pay!
                  </Button>
                </div>

                <div className="mt-3">
                  <p className="text-red-500 text-left">Kembalian: </p>
                </div>
              </div>
            </div>
            <DialogFooter></DialogFooter>
          </DialogContent>
        </Dialog>
      </>
    );
  };

  console.log("total price in carts ", totalPriceInCarts);

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
          <Button
            className="bg-green-600 w-full hover:bg-green-500"
            onClick={() => saveBill()}
          >
            Save Bill
          </Button>
          <Button
            className="bg-green-600 w-full hover:bg-green-500"
            onClick={() => window.print()}
          >
            Print Bill
          </Button>
        </div>
        <ChargeBill />
      </div>
    </div>
  );
};

export default TransactionClient;
