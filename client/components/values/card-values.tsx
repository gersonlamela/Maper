import Image from 'next/image';
import { Card, CardContent } from '../ui/card';

interface CardValuesProps {
  title: string;
  imageSrc: string;
  description: string;
}

export default function CardValues({
  title,
  imageSrc,
  description,
}: CardValuesProps) {
  return (
    <Card className="flex items-center justify-center gap-3.75 border-none bg-transparent p-0 shadow-none">
      <Image
        alt="Quality"
        src={`/images/values/${imageSrc}`}
        width={54}
        height={54}
        className=""
      />
      <CardContent className="border-primary shadow-primary flex h-40.75 w-42.5 flex-col items-center justify-center gap-2.5 rounded-[23px] border bg-white px-1.25 shadow-md">
        <h2 className="text-center text-sm font-bold text-black">{title}</h2>
        <p className="text-center text-sm font-normal text-black">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
