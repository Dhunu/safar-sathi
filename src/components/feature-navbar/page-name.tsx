"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function PageName() {
    const [pageName, setPageName] = useState<string>("");
    const pathname = usePathname();

    useEffect(() => {
        if (pathname === "/load-board") setPageName("Load Board");
        else if (pathname === "/fleet-management")
            setPageName("Fleet Management");
        else if (pathname === "/partner-network")
            setPageName("Partner Network");
        else if (pathname === "/incentive-programs")
            setPageName("Incentive Programs");
        else if (pathname === "/support") setPageName("Support & Community");
    }, [pathname]);

    return (
        <h1 className="text-2xl font-begum-w03-bold text-primary ">
            {pageName}
        </h1>
    );
}
