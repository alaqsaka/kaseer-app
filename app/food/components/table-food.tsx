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
import Image from "next/image";
import { LuEdit, LuTrash } from "react-icons/lu";

const TableFood = () => {
  return (
    <Table>
      <TableHeader className="bg-gray-100">
        <TableRow>
          <TableHead className="w-[100px]">#</TableHead>
          <TableHead>Nama</TableHead>
          <TableHead>Foto</TableHead>
          <TableHead className="">Harga</TableHead>
          <TableHead className="text-right">Aksi</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Array.from(Array(10), (e, i) => {
          return (
            <TableRow key={i}>
              <TableCell className="font-medium">{i}</TableCell>
              <TableCell>Nasi Goreng</TableCell>
              <TableCell>
                <Image
                  alt="Food Image"
                  height={100}
                  width={100}
                  src={`/nasigoreng.avif`}
                />
              </TableCell>
              <TableCell className="">Rp. 30.000</TableCell>
              <TableCell className="text-right">
                <div className="flex gap-2 justify-end">
                  <Button className="bg-amber-500 hover:bg-amber-400">
                    <LuEdit className="h-4 w-4" />
                    Edit
                  </Button>
                  <Button className="bg-red-500 hover:bg-red-400">
                    <LuTrash className="h-4 w-4" />
                    Delete
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default TableFood;
