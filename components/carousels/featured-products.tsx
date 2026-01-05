import Image from 'next/image';
import { Card, CardContent } from '../ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';

export default function FeaturedProducts() {
  return (
    <div className="flex w-full flex-col items-start justify-center gap-3.75 px-4">
      <h1 className="text-primary text-[20px] font-bold">
        Produtos em destaque
      </h1>

      <Carousel
        opts={{
          align: 'start',
        }}
        className="w-full max-w-sm"
      >
        <CarouselContent className="flex gap-3.75 pl-3">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="basis-1/2 pl-1 md:basis-1/4 lg:basis-1/3"
            >
              <Card className="h-75 max-w-42.5 border-0 p-0 shadow-none">
                <CardContent className="flex w-full flex-col items-center justify-center gap-2.5 p-0">
                  <div className="h-47.5 w-full rounded-[30px] bg-[#f7f7f7]">
                    <Image
                      alt={'Product' + index}
                      src=""
                      width={170}
                      height={170}
                    />
                  </div>

                  <div className="flex w-full flex-col items-start justify-items-start">
                    <h1 className="text-center text-sm font-bold">
                      Produto {index + 1}
                    </h1>
                    <h2 className="text-gray700 mt-1.25 text-center text-sm font-normal">
                      Olhos
                    </h2>
                    <p className="text-primary mt-2.5 text-center text-sm font-bold">
                      19.99€
                    </p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="border-primary text-primary -top-7 ml-85" />
        <CarouselNext className="border-primary text-primary abosulte -top-7 right-0" />
      </Carousel>
    </div>
  );
}
