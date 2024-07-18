"use client";

import { TbMenuDeep } from "react-icons/tb";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet";
import Logo from "@/components/logo";
import { featuredLinks } from "@/constants";
import { cn } from "@/lib/utils";

export default function MobileMenu() {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger className="sm:hidden">
                <TbMenuDeep className="w-8 h-8 text-primary" />
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <Logo />
                </SheetHeader>
                <div className="flex flex-col gap-5 mt-10 text-primary">
                    {featuredLinks.map(({ href, text }) => (
                        <SheetClose asChild key={href}>
                            <Link
                                key={href}
                                href={href}
                                className="text-lg font-semibold relative mr-auto"
                            >
                                {text}
                                <div
                                    className={cn(
                                        "absolute bottom-0 h-[2px] bg-primary transition-all duration-300 ease-in-out",
                                        pathname === href ? "w-2/3 " : "w-0"
                                    )}
                                />
                            </Link>
                        </SheetClose>
                    ))}
                </div>
            </SheetContent>
        </Sheet>
    );
}
