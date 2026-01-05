import FeaturedProducts from '@/components/carousels/featured-products';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-7.5">
      <Image
        src="/images/banners/BannerMobile-1.svg"
        alt="MA.PER banner powerlashes"
        width={0}
        height={0}
        style={{ width: '100%', height: 'auto' }}
        quality={100}
      />

      <FeaturedProducts />
    </main>
  );
}
