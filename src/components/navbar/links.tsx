"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { href: "/", text: "Home" },
    { href: "/dashboard", text: "Dashboard" },
    { href: "/about-us", text: "About Us" },
];

export default function NavLinks() {
    const pathname = usePathname();
    return (
        <div className="gap-5 text-primary relative hidden sm:flex">
            {links.map(({ href, text }) => (
                <Link
                    key={href}
                    href={href}
                    className="text-lg font-semibold relative"
                >
                    {text}
                    <div
                        className={cn(
                            "absolute bottom-0 h-[2px] bg-primary transition-all duration-300 ease-in-out left-[18%]",
                            pathname === href ? "w-2/3 " : "w-0"
                        )}
                    />
                </Link>
            ))}
        </div>
    );
}
