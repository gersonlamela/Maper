import { Search, ShoppingBag, UserRound } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="border-gray200 flex h-25 w-full flex-col items-center justify-between gap-2.5 border-b px-5 py-2.5">
      <div className="flex w-full items-center justify-between">
        <div className="w-18.5">
          <Image
            src="images/icons/menu.svg"
            alt="MA.PER logo"
            width={22}
            height={16}
          />
        </div>
        <Link href="/">
          <Image
            src="images/logo/logo-pink.svg"
            alt="MA.PER logo"
            width={103}
            height={30}
          />
        </Link>
        <div className="flex w-18.5 items-center justify-center gap-3.75">
          <UserRound size={22} />
          <hr className="h-5.5 border border-black" />
          <div className="relative">
            <ShoppingBag size={22} />
            <div className="bg-primary absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full text-[12px] font-bold text-white">
              3
            </div>
          </div>
        </div>
      </div>

      <div className="border-gray800 relative flex h-10 w-full items-center justify-center gap-3.75 rounded-full border px-5 py-2.5">
        <Search size={20} className="" />
        <input
          type="text"
          name="search"
          className="flex-1 border-0 placeholder:text-[#595959] focus:outline-0"
          placeholder="O que está à procura?"
        />
      </div>
    </div>
  );
}
