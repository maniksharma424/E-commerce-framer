import RightChevron from "@/Icons/RightChevron";
import Move from "@/components/Move";
import ProductDetails from "@/components/ProductDetails";
import { Product } from "@/types";

async function getData(id: string | null) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page({ params }: { params: { id: string } }) {
  const data: Product = await getData(params.id);

  return (
    <div className="w-full sm:h-screen h-fit flex justify-center">
      <div className="  w-5/6   mt-10  ">
        <ProductDetails product={data} />
        <Move id={params.id} />
      </div>
    </div>
  );
}
