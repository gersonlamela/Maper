import Image from 'next/image';
import Link from 'next/link';

export function NavbarLogo() {
  return (
    <Link href="/">
      <Image
        src="/images/logo/logo-pink.svg"
        alt="MA.PER logo"
        width={103}
        height={30}
      />
    </Link>
  );
}
