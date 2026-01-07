import FeaturedProducts from '@/components/carousels/featured-products';
import NewProducts from '@/components/carousels/new-products';
import Categories from '@/components/categories';
import Newsletter from '@/components/newsletter/newsletter';
import Values from '@/components/values/values';
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
      <hr className="w-50 border border-[#D6D6D6]" />
      <Categories />
      <hr className="w-50 border border-[#D6D6D6]" />
      <NewProducts />
      <div className="w-full px-0">
        <Image
          src="/images/banners/BannerMobile-2.svg"
          alt="MA.PER banner powerlashes"
          width={0}
          height={0}
          style={{ width: '100%', height: 'auto' }}
          quality={100}
        />

        <Values />

        <Newsletter />
      </div>
    </main>
  );
}
