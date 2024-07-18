import FeatureNavbar from "@/components/feature-navbar";
import Footer from "@/components/footer";
import Transition from "@/components/transition";
import { ReactNode } from "react";

export default function FeatureLayout({ children }: { children: ReactNode }) {
    return (
        <div className="w-full min-h-screen flex flex-col">
            <FeatureNavbar />
            <div className="flex-1">
                <Transition>{children}</Transition>
            </div>
            <Footer />
        </div>
    );
}
