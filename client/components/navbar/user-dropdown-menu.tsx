'use client';

import { logoutAction } from '@/app/actions/logout';
import { UserRound } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

interface UserDropdownMenuProps {
  email?: string;
}

export default function UserDropdownMenu({ email }: UserDropdownMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserRound size={22} />
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuItem disabled className="opacity-70">
          {email}
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <form action={logoutAction}>
            <button type="submit" className="w-full text-left">
              Terminar sessão
            </button>
          </form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
