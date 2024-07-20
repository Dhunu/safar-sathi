import PendingRequestCarousel from "@/components/partner-network/PendingRequestCarousel";
import { requests } from "@/constants";
import React from "react";

export default function PartnerNetwork() {
    return (
        <div className="w-full px-5 sm:px-10 mt-5 sm:mt-10">
            <h2 className="text-2xl lg:text-3xl font-semibold text-primary">
                Pending Requests
            </h2>
            <PendingRequestCarousel requests={requests} />
        </div>
    );
}
