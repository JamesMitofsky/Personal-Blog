"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { config } from "@/config";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FunctionComponent } from "react";
import Image from "next/image";
interface MenuItem {
  name: string;
  href: string;
  openInNewTab?: boolean;
}
const menuItems: MenuItem[] = [
  { name: "Posts", href: "/" },
  { name: "About", href: "/about" },
];
export const Navigation: FunctionComponent = () => {
  const pathname = usePathname();

  return (
    <nav>
      <div className="hidden md:flex items-center text-lg">
        {menuItems.map((item) => (
          <div key={item.href} className="ml-4 md:ml-8">
            <a
              href={item.href}
              target={item.openInNewTab ? "_blank" : "_self"}
              className={cn(
                "hover:text-gray-900",
                pathname === item.href && "font-semibold"
              )}
            >
              {item.name}
            </a>
          </div>
        ))}
      </div>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <Menu size="24" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription className="mt-4">
                {menuItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target={item.openInNewTab ? "_blank" : "_self"}
                    className={cn(
                      "block py-4 text-lg",
                      pathname === item.href && "font-semibold"
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export const Header: FunctionComponent = () => {
  return (
    <section className="flex items-end justify-between mt-8 mb-16 md:my-16 xl:my-20">
      <div className="flex gap-3 md:gap-7">
        <Link href="/">
          <Image 
            width={110} 
            height={110} 
            src="/jm-logo.svg" 
            alt="JM Logo" 
            className="w-[50px] md:w-[110px] dark:invert"
          />
        </Link>
        <h2 className="hidden md:flex md:text-sm font-light tracking-tight leading-snug max-w-[170px] md:max-w-[240px] items-end">
          {config.blog.metadata.description}
        </h2>
      </div>
      <Navigation />
    </section>
  );
};
