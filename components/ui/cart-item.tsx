import Image from "next/image";
import React from "react";
import { Product, Cart } from "@/types";

interface CartItemProps {
  data: Cart;
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
  return (
    <div className="flex justify-between items-center mt-3">
      <Image src={data.imageUrl} height={100} width={120} alt="Product Image" />

      <p className="font-semibold">{data.name}</p>
      <p className="font-semibold">x{data.jumlah}</p>
      <p className="text-sky-500 font-semibold">Rp. {data.totalPrice}</p>
    </div>
  );
};

export default CartItem;
