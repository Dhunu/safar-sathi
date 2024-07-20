import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";
import { cn } from "@/lib/utils";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-poppins",
});

export const metadata: Metadata = {
    title: {
        default: "Safar Sathi",
        template: "%s | Safar Sathi",
    },
    description: "Plan and manage your trips with ease on Saफर सathi",
    icons: "/images/icon.svg",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={cn(
                    "min-h-screen bg-background font-poppins antialiased",
                    poppins.variable
                )}
            >
                {children}
            </body>
        </html>
    );
}
