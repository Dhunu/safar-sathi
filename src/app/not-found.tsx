import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function NotFound() {
    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center">
            <h1 className="text-3xl lg:text-5xl font-extrabold text-primary">
                404 - Page Not Found
            </h1>
            <p className="mt-2 lg:text-xl text-base font-semibold text-secondary/60">
                The page you are looking for does not exist.
            </p>
            <Link href="/">
                <Button className="mt-5">Go Home</Button>
            </Link>
        </div>
    );
}
