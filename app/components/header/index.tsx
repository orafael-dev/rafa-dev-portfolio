"use client";

import Image from "next/image";
import Link from "next/link";
import {NavItem} from "./nav-items";

const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Projetos",
    href: "/projects",
  },
];

export const Header = () => {
  return (
    <header className="absolute top-0 w-full z-10 h-24 flex items-center justify-center">
      <div className="container flex items-center justify-between">
        <Link
          href="/"
          className="text-gray-400 flex items-center gap-2 font-medium font-mono"
        >
          <Image
            width={42}
            height={40}
            src="/images/logo.svg"
            alt="Logo Rafael"
          />
        </Link>
        <nav className="flex items-center gap-4 sm:gap-10 ">
          {NAV_ITEMS.map((item) => (
            <NavItem key={item.label} {...item} />
          ))}
        </nav>
      </div>
    </header>
  );
};
