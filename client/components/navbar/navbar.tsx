'use client';

import { useState } from 'react';

import { NavbarActions } from './navbar-actions';
import { NavbarLogo } from './navbar-logo';
import NavbarMenuMobile from './navbar-menu-mobile';
import { NavbarMenuToggle } from './navbar-menu-toggle';
import { NavbarSearch } from './navbar-search';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-white">
      <div className="flex flex-col gap-2.5 px-5 py-2.5">
        <div className="flex items-center justify-between">
          <NavbarMenuToggle
            isOpen={isMenuOpen}
            onToggle={() => setIsMenuOpen((prev) => !prev)}
          />

          <NavbarLogo />

          <NavbarActions />
        </div>

        <NavbarSearch />

        {isMenuOpen && <NavbarMenuMobile />}
      </div>
    </header>
  );
}
