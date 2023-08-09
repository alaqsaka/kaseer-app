import Container from "@/components/container";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AiOutlineCloudUpload } from "react-icons/ai";
import React from "react";
import { Button } from "@/components/ui/button";
import FoodForm from "../components/food-form";

const New = () => {
  return (
    <Container>
      <div className="bg-white p-5">
        <p className="text-sky-500 font-semibold text-lg">Tambahkan Menu</p>

        <FoodForm />

        <div className="mt-3">
          <Label htmlFor="name">Nama Menu</Label>
          <Input type="name" id="name" placeholder="" className="mt-1" />
        </div>

        <div className="mt-3">
          <Label htmlFor="name">Gambar Menu</Label>

          <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 bg-slate-100">
            <div className="text-center">
              <AiOutlineCloudUpload className="h-12 w-12 mx-auto text-gray-300" />
              <div className="mt-4 flex text-sm leading-6 text-gray-600">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer rounded-md font-semibold text-sky-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                >
                  <span>Upload a file</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs leading-5 text-gray-600">
                PNG, JPG, GIF up to 10MB
              </p>
            </div>
          </div>
        </div>

        <div className="mt-3">
          <Label htmlFor="name">Harga Menu</Label>
          <Input type="name" id="name" placeholder="" className="mt-1" />
        </div>

        <div className="mt-3 flex justify-end">
          <Button className="bg-green-600 px-20 hover:bg-green-500">
            Simpan
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default New;
