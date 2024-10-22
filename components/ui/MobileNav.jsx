"use client";

// imports
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { PiBracketsSquare } from "react-icons/pi";

// links
const links = [
  { name: "home", path: "/" },
  // { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "Projects", path: "/work" },
  { name: "contact", path: "/contact" }
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* logo */}
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              <span className="text-accent mr-2">[</span>
              <span>Aaron</span>
              <span className="text-accent ml-2">~]</span>
            </h1>
          </Link>
        </div>
        {/*mobile nav */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className={`${
                link.path === pathname && "text-accent border-b-2 border-accent"
              } capitalize text-xl hover:text-accent transition-all`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
