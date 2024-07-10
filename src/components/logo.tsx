import Image from "next/image";
import React from "react";

export default function Logo() {
    return (
        <div className="flex items-center gap-2">
            <Image
                src="/images/logo.svg"
                width={40}
                height={40}
                alt="logo"
                className="object-cover w-10 h-10"
            />
            <Image
                src="/images/logo-text.svg"
                width={60}
                height={20}
                alt="logo-text"
                className="py-2 object-cover"
            />
        </div>
    );
}
