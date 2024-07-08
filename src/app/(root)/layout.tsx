import Navbar from "@/components/navbar";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <div className="w-full min-h-screen flex flex-col">
            <Navbar />
            <div className="flex my-auto h-full">{children}</div>
        </div>
    );
}
