import Image from 'next/image';
import NewsletterForm from './newsletter-form';

export default function Newsletter() {
  return (
    <div className="flex flex-col items-start justify-center bg-[#F6F3F3] px-7.5 pt-7.5">
      <h1 className="text-primary text-[22px] font-black">
        Ganhe 10% de desconto
      </h1>
      <p className="w-75 text-base font-normal text-[#5A5A5A]">
        Registe-se e receba um cupom para a sua primeira compra.
      </p>
      <NewsletterForm />
      <div className="flex w-full items-center justify-center">
        <Image
          alt="image newsletter products"
          src={'/images/newsletter/Products-newsletter.svg'}
          quality={100}
          width={300}
          height={250}
          className="w-auto"
        />
      </div>
    </div>
  );
}
