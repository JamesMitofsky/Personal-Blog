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
                "text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-400 transition-colors",
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
                      "block py-4 text-lg text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200",
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
      <div className="flex gap-3 md:gap-7 items-end">
        <Link href="/">
          <svg 
            height="100%" 
            width="100%" 
            viewBox="0 159.585 1081.01 760.415" 
            strokeMiterlimit="10" 
            className="w-[50px] md:w-[110px] fill-[#201312] dark:fill-white"
            style={{
              fillRule: "nonzero",
              clipRule: "evenodd",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }}
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs/>
            <g id="Layer">
              <g opacity="1">
                <path d="M760 920L620 920C620 920 620 598.741 620 260C534.603 260 460 260 460 260C460 260 637.721 81.9806 740 200C753.723 215.835 757.72 224.025 760 240C762.28 255.975 760 920 760 920Z" fillRule="nonzero" opacity="1" stroke="none"/>
                <path d="M1080 920L940 920C940 920 940 598.741 940 260C854.603 260 780 260 780 260C780 260 957.721 81.9806 1060 200C1073.72 215.835 1077.72 224.025 1080 240C1082.28 255.975 1080 920 1080 920Z" fillRule="nonzero" opacity="1" stroke="none"/>
                <path d="M400 160C400 377.871 400.07 783.989 400 800C399.694 870.082 318.718 920 260 920C260 702.129 259.206 312.23 260 280C261.716 211.852 343.675 160 400 160Z" fillRule="nonzero" opacity="1" stroke="none"/>
                <path d="M0 827.54C0 776.476 41.3957 735.08 92.4598 735.08C143.524 735.08 184.92 776.476 184.92 827.54C184.92 878.604 143.524 920 92.4598 920C41.3957 920 0 878.604 0 827.54Z" fillRule="nonzero" opacity="1" stroke="none"/>
              </g>
            </g>
          </svg>
        </Link>
        <h2 className="flex text-xs dark:text-gray-300 text-gray-900 md:text-sm font-light tracking-tight leading-snug max-w-[170px] items-end -mb-[3px]">
          {config.blog.metadata.description}
        </h2>
      </div>
      <Navigation />
    </section>
  );
};
