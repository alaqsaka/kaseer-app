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

const TableFood = () => {
  return (
    <Table>
      <TableHeader className="bg-gray-100">
        <TableRow>
          <TableHead className="w-[100px]">#</TableHead>
          <TableHead>Nama</TableHead>
          <TableHead>Foto</TableHead>
          <TableHead className="">Harga</TableHead>
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
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default TableFood;
