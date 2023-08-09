import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Cart } from "@/types";
import Image from "next/image";
import React from "react";
import { LuEdit, LuTrash } from "react-icons/lu";

interface TableFoodProps {
  data: Cart[];
}

const TableFood: React.FC<TableFoodProps> = ({ data }) => {
  return (
    <Table>
      <TableHeader className="bg-gray-100">
        <TableRow>
          <TableHead className="w-[100px]">#</TableHead>
          <TableHead>Nama</TableHead>
          <TableHead>Foto</TableHead>
          <TableCell>Jumlah</TableCell>
          <TableHead className="">Harga</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((product, index) => (
          <TableRow key={product.productId}>
            <TableCell className="font-medium">{index + 1}</TableCell>
            <TableCell>{product.name}</TableCell>
            <TableCell>
              <Image
                alt="Food Image"
                height={100}
                width={100}
                src={`/nasigoreng.avif`}
              />
            </TableCell>
            <TableCell>{product.jumlah}</TableCell>
            <TableCell className="">Rp. {product.totalPrice}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableFood;
