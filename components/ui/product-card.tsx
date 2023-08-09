import { Product } from "@/types";
import Image from "next/image";

interface ProductCardProps {
  data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  return (
    <div className="bg-white cursor-pointer shadow-md">
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={data.imageUrl}
          fill
          // height={50}
          // width={50}
          alt="Product image"
          className="aspect-square object-cover rounded-md"
        />
      </div>
      <div className="p-3 text-center">
        <p className="text-base font-semibold">{data.name}</p>
        <p className="text-base font-semibold text-sky-500">Rp. {data.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
