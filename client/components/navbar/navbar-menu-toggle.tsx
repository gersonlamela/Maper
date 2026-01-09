import { X } from 'lucide-react';
import Image from 'next/image';

export function NavbarMenuToggle({
  isOpen,
  onToggle,
}: {
  isOpen: boolean;
  onToggle: () => void;
}) {
  if (isOpen) {
    return <X size={22} onClick={onToggle} />;
  }

  return (
    <Image
      src="/images/icons/menu.svg"
      alt="Menu"
      width={22}
      height={16}
      onClick={onToggle}
    />
  );
}
