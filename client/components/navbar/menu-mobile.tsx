import Link from 'next/link';

export default function MenuMobile() {
  return (
    <div className="animate-slide-in-down absolute top-25 z-99 m-0 flex w-full flex-col items-start justify-start gap-4 bg-white pt-2.5 pb-5 shadow-md">
      <Link href="/" className="ml-5 text-base font-normal text-black">
        Início
      </Link>
      <Link
        href="/all-products"
        className="ml-5 text-base font-normal text-black"
      >
        Produtos
      </Link>
      <Link href="/about-us" className="ml-5 text-base font-normal text-black">
        Sobre Nós
      </Link>
      <Link href="/contact" className="ml-5 text-base font-normal text-black">
        Contacto
      </Link>
    </div>
  );
}
