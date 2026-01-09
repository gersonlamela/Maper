import { Product } from '@/types/products';
import Link from 'next/link';
import CardProduct from '../card-product';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';

async function getFeaturedProducts(): Promise<Product[]> {
  const res = await fetch(
    'http://localhost:3000/api/products/random-products',
    {
      cache: 'no-store',
    },
  );

  if (!res.ok) {
    throw new Error('Erro ao carregar produtos');
  }

  const { data } = await res.json();
  return data;
}

export default async function FeaturedProducts() {
  const products = await getFeaturedProducts();

  console.log(products);
  return (
    <div className="flex w-full flex-col items-start justify-center gap-4 px-4">
      <h1 className="text-primary text-[20px] font-bold">
        Produtos em destaque
      </h1>

      <Carousel
        opts={{
          align: 'start',
          containScroll: 'trimSnaps',
        }}
        className="relative w-full"
      >
        <CarouselContent className="-ml-2">
          {products.map((product) => {
            const mainImage =
              product.images.find((img) => img.isPrimary) ?? product.images[0];

            return (
              <CarouselItem
                key={product.id}
                className="basis-1/2 pl-2 sm:basis-1/3 lg:basis-1/4"
              >
                <CardProduct
                  name={product.name}
                  price={product.price}
                  category={product.category.name}
                  imageSrc={mainImage?.url ?? '/images/placeholder.svg'}
                  discountPercent={product.discountPercentage}
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>

        <CarouselPrevious className="border-primary text-primary -top-7 ml-96" />
        <CarouselNext className="border-primary text-primary absolute -top-7 right-0" />
      </Carousel>

      <div className="flex w-full items-center justify-center">
        <Link
          href="/all-products"
          className="bg-primary flex h-8.75 w-45 items-center justify-center rounded-[5px] text-center font-bold text-white"
        >
          Ver todos os produtos
        </Link>
      </div>
    </div>
  );
}
