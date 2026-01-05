import { ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

interface CardProductProps {
  name: string;
  price: number;
  category: string;
  imageSrc: string;
}

export default function CardProduct({
  name,
  price,
  category,
  imageSrc,
}: CardProductProps) {
  return (
    <Card className="border-0 p-0 shadow-none">
      <CardContent className="flex w-full flex-col items-start justify-center gap-2.5 p-0">
        <div className="relative aspect-square w-full max-w-42.5 rounded-[30px] bg-[#f7f7f7] shadow">
          <Image
            alt={name}
            src={imageSrc}
            fill
            className="object-contain"
            loading="lazy"
          />
        </div>

        <div className="relative flex w-full max-w-42.5 flex-col items-start justify-items-start">
          <h1 className="text-center text-sm font-bold">{name}</h1>
          <h2 className="text-gray700 mt-1.25 text-center text-sm font-normal">
            {category}
          </h2>
          <p className="text-primary mt-2.5 text-center text-sm font-bold">
            {price}€
          </p>

          <Button className="absolute right-0 bottom-1 flex h-10 w-10 items-center justify-center rounded-full rounded-bl-none bg-white text-black shadow-md">
            <ShoppingBag size={21.6} />
            <span className="text-primary absolute -top-2 -right-1 text-2xl">
              +
            </span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
