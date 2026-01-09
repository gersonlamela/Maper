import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

export function NavbarSearch() {
  return (
    <div className="flex h-10 items-center gap-2 rounded-full border px-5">
      <Search size={20} />
      <Input
        placeholder="O que está à procura?"
        className="border-0 focus-visible:ring-0"
      />
    </div>
  );
}
