import { UserRound } from 'lucide-react';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

export default function UserDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserRound size={22} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="">
        <DropdownMenuItem>
          <Link href="login">Iniciar sessão</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="register">Criar Conta</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
