"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
    const pathname = usePathname();
    return (
        <div className="flex gap-5 text-primary relative">
            <Link href="/" className="text-lg font-semibold">
                Home
            </Link>
            <Link href="/about" className="text-lg font-semibold">
                About
            </Link>
            <Link href="/contact" className="text-lg font-semibold">
                Contact
            </Link>
            <div
                className={cn(
                    "animation",
                    pathname === "/" && "start-home",
                    pathname === "/about" && "start-about",
                    pathname === "/contact" && "start-contact"
                )}
            ></div>
        </div>
    );
}
