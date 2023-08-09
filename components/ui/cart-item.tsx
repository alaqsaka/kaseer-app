import Image from "next/image";
import React from "react";

const CartItem = () => {
  return (
    <div className="flex justify-between items-center mt-3">
      <Image
        src={`/nasigoreng.avif`}
        height={100}
        width={120}
        alt="Product Image"
      />

      <p className="font-semibold">Sate Ayam</p>
      <p className="font-semibold">x1</p>
      <p className="text-sky-500 font-semibold">Rp. 30.000</p>
    </div>
  );
};

export default CartItem;
