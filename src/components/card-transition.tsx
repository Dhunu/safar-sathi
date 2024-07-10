"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

export default function CardTransition({
    children,
    delay,
    className,
}: {
    children: ReactNode;
    delay?: number;
    className?: string;
}) {
    const [page, setPage] = useState<string | undefined>(undefined);
    const pathname = usePathname();
    

    useEffect(() => {
        const renderedPages = localStorage.getItem("renderedPages");

        const pageRendered = renderedPages
            ?.split(",")
            .find((page) => page === pathname);

        if (pageRendered === undefined) {
            setPage(undefined);
        } else {
            setPage(pathname);
        }
    }, []);
    if (page === undefined) {
        return (
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.75, delay }}
                viewport={{ once: true }}
                className={className}
            >
                {children}
            </motion.div>
        );
    }

    return <div className={className}>{children}</div>;
}
