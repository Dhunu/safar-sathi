import Link from "next/link";
import Image from "next/image";

import MobileMenu from "./mobile-menu";
import NavLinks from "./links";

export default function Navbar() {
    return (
        <nav className="w-full h-16 flex justify-between px-5 md:px-10 items-center bg-[#FFF0B6]">
            <Link href="/" className="flex gap-2 items-center">
                <Image
                    src="/images/logo.svg"
                    width={35}
                    height={35}
                    alt="logo"
                />
                <Image
                    src="/images/logo-text.svg"
                    width={60}
                    height={20}
                    alt="logo-text"
                    className="py-2 object-cover hidden sm:block"
                />
            </Link>
            <NavLinks />
            <MobileMenu />
        </nav>
    );
}
