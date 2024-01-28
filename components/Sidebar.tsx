import Logo from "./Logo";
import Link from "next/link";
import CTAButton from "./CTAButton";
import ContactButton from "./ContactButton";
import { navLinks } from "@/data";

export default function Sidebar() {
  return (
    <div className="flex flex-col justify-between p-4 md:hidden w-2/3 h-screen fixed z-40 bg-white shadow-xl top-0 right-0">
      <Logo />
      <div className="flex flex-col gap-4 p-4">
        {navLinks.map((link, i) => (
          <Link key={i} className="" href={link.href}>
            {link.label}
          </Link>
        ))}
      </div>
      <div className="flex flex-col gap-2 border-t pt-4">
        <ContactButton />
        <CTAButton />
      </div>
    </div>
  );
}
