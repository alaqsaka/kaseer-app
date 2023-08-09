"use client";

import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ui/product-card";
import { Product } from "@/types";
import { useState } from "react";

interface TransactionClientProps {
  data: Product[];
}

const TransactionClient: React.FC<TransactionClientProps> = ({ data }) => {
  const [products, setProducts] = useState([]);

  console.log(data);

  const addProduct = () => {};

  return (
    <div className="grid grid-cols-3 gap-3">
      <div className="col-span-2" style={{ width: "inherit" }}>
        <div className="grid grid-cols-3 gap-4">
          {data.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </div>
      </div>

      <div className="bg-white p-3 shadow-md rounded-md h-fit">
        <p className="text-xl text-center font-bold">Pesanan</p>
        <Button
          variant="outline"
          className="border-red-500 text-red-500 hover:text-red-500 hover:bg-white w-full font-semibold mt-3"
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
