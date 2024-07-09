"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function CardTransition({
    children,
    delay,
    className
}: {
    children: ReactNode;
    delay?: number;
    className?: string;
}) {
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
