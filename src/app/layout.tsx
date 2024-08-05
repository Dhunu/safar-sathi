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
    metadataBase: new URL("https://safar-sathi.angelsaikia.com"),
    title: {
        default: "Safar Sathi",
        template: "%s | Safar Sathi",
    },
    description: "Plan and manage your trips with ease on Saफर सathi",
    openGraph: {
        title: "Safar Sathi",
        description: "Plan and manage your trips with ease on Saफर सathi",
        type: "website",
        locale: "en_IN",
        url: "https://safar-sathi.angelsaikia.com",
        siteName: "Safar Sathi",
    },
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
