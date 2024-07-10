"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect } from "react";

export default function Transition({ children }: { children: ReactNode }) {
    const pathname = usePathname();

    useEffect(() => {
        window.onbeforeunload = function () {
            localStorage.removeItem("renderedPages");
        };
    }, []);
    useEffect(() => {
        const renderedPages = localStorage.getItem("renderedPages");

        const pageRendered = renderedPages
            ?.split(",")
            .find((page) => page === pathname);

        if (pageRendered === undefined) {
            localStorage.setItem(
                "renderedPages",
                renderedPages ? `${renderedPages},${pathname}` : pathname
            );
        }
    }, [pathname]);
    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
        >
            {children}
        </motion.div>
    );
}
