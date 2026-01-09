import { useAuth } from '@/providers/auth-provider';
import { ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import UserDropdownMenu from './user-dropdown-menu';

export function NavbarActions() {
  const { user, isAuthenticated } = useAuth();

  console.log('NavbarActions - isAuthenticated:', isAuthenticated);
  return (
    <div className="flex items-center gap-3.75">
      {isAuthenticated ? (
        <UserDropdownMenu email={user?.email} />
      ) : (
        <Link href="/login">
          <Image
            src="/images/icons/user.svg"
            alt="Login"
            width={22}
            height={22}
          />
        </Link>
      )}

      <hr className="h-5.5 border border-black" />

      <div className="relative">
        <ShoppingBag size={22} />
        <span className="bg-primary absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full text-[12px] font-bold text-white">
          3
        </span>
      </div>
    </div>
  );
}
