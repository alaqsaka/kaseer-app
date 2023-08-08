"use client";

import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <>
      <header className="text-gray-600 bg-sky-500 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl text-white">Alan Resto</span>
          </a>
        </div>
      </header>
      <div className="flex h-16 shadow-md bg-white">
        <div className="w-4/6 lg:w-5/6 mx-auto flex gap-6">
          <div
            onClick={() => router.push("/food")}
            className={`px-5  flex items-center font-semibold text-center hover:bg-gray-100 cursor-pointer ${
              pathname.includes("food") === true && "border-sky-500 border-b-2"
            }`}
          >
            Food
          </div>
          <div
            onClick={() => router.push("/transaction")}
            className={`px-5  flex items-center font-semibold text-center hover:bg-gray-100 cursor-pointer ${
              pathname.includes("transaction") && "border-sky-500 border-b-2"
            }`}
          >
            Transaction
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
