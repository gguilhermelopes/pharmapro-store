"use client";

import { FC } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu } from "@headlessui/react";

import { cn } from "@/lib/utils";
import { Category } from "@/types";
import { Menu as MenuIcon } from "lucide-react";

interface MainNavProps {
  data: Category[];
}

const MainNav: FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();
  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    isActive: pathname === `/category/${route.id}`,
  }));
  return (
    <>
      <nav className="block md:hidden z-10">
        <Menu as="div" className="mt-2 ms-4">
          <Menu.Button className="hover:scale-110 transition">
            <MenuIcon color="white" />
          </Menu.Button>
          <Menu.Items className="absolute left-0 top-16 flex flex-col bg-custom400 rounded-sm overflow-hidden">
            {routes.map((route, index) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "text-white border-slate-300 hover:bg-white hover:text-custom700",
                  index === routes.length - 1 ? "" : "border-b"
                )}
              >
                <Menu.Item as="a">
                  {({ close }) => (
                    <p className="w-full h-full px-6 py-2 " onClick={close}>
                      {route.label}
                    </p>
                  )}
                </Menu.Item>
              </Link>
            ))}
          </Menu.Items>
        </Menu>
      </nav>
      <nav className="mx-6 hidden md:flex items-center space-x-2 lg:space-x-4">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "text-sm font-medium transition hover:bg-slate-100 px-3 py-2 rounded-md hover:text-black",
              route.isActive ? "text-black bg-slate-200" : "text-slate-100"
            )}
          >
            {route.label}
          </Link>
        ))}
      </nav>
    </>
  );
};

export default MainNav;
