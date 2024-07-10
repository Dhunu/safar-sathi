import Navbar from "@/components/navbar";
import Transition from "@/components/transition";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <div className="w-full min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-1">
                <Transition>{children}</Transition>
            </div>
        </div>
    );
}
