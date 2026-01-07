import Link from 'next/link';
import CardProduct from '../card-product';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';

export default function NewProducts() {
  return (
    <div className="flex w-full flex-col items-start justify-center gap-4 px-4">
      <h1 className="text-primary text-[20px] font-bold">Lançamentos</h1>

      <Carousel
        opts={{
          align: 'start',
          containScroll: 'trimSnaps',
        }}
        className="relative w-full"
      >
        <CarouselContent className="-ml-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="basis-1/2 pl-2 sm:basis-1/3 lg:basis-1/4"
            >
              <CardProduct
                name={'Produto 1'}
                price={12.39}
                category="Olhos"
                imageSrc={`/images/products/product1.svg`}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="border-primary text-primary -top-7 ml-96" />
        <CarouselNext className="border-primary text-primary abosulte -top-7 right-0" />
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
