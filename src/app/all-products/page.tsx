import ImageCarousel from "@/components/ImageCarousel";
import ImagecarouselPhone from "@/components/ImagecarouselPhone";
import ProductCard from "@/components/ProductCard";
import TextAnimation from "@/components/TextAnimation";
import { Product } from "@/types";

async function getData() {
  const res = await fetch("https://fakestoreapi.com/products");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
  const data: Product[] = await getData();
  console.log(data);

  return (
    <div className="w-full h-fit">
      <div className="w-full flex  items-center flex-col">
        <ImageCarousel />
        <ImagecarouselPhone />
        <TextAnimation />
      </div>
      <div className=" w-full flex justify-center">
        <div className=" w-5/6 h-fit grid lg:grid-cols-3 lg:gap-10 sm:gap-8 gap-5  sm:grid-cols-2 grid-cols-1  justify-center">
          {data.map((product: Product) => {
            return (
              <ProductCard key={product.id} product={product}></ProductCard>
            );
          })}
        </div>
      </div>
    </div>
  );
}
