import Image from "next/image";
import Link from "next/link";
import React from "react";
import PageName from "./page-name";
import NavLinks from "./nav-links";
import MobileMenu from "./mobile-menu";

export default function FeatureNavbar() {
    return (
        <nav className="w-full h-16 flex justify-between px-5 md:px-10 items-center bg-[#FFF0B6]">
            <Link href="/" className="flex gap-2 items-center">
                <Image
                    src="/images/logo.svg"
                    width={35}
                    height={35}
                    alt="logo"
                />
                <PageName />
            </Link>
            <NavLinks />
            <MobileMenu />
        </nav>
    );
}
