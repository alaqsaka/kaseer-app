import { Button } from "@/components/ui/button";
import React from "react";
import { LuPlus } from "react-icons/lu";
import TableFood from "./components/table-food";
import Link from "next/link";

const Food = () => {
  return (
    <div className="w-4/6 lg:w-5/6 mx-auto py-8">
      <p className="text-gray-500">Tambahkan menu makanan yang ada di resto</p>

      <div className="mt-3 bg-white p-5">
        <Link href={`/food/new`}>
          <Button>
            <LuPlus size={20} className="mr-1" />
            Tambah Menu
          </Button>
        </Link>

        <div className="mt-3">
          <TableFood />
        </div>
      </div>
    </div>
  );
};

export default Food;
