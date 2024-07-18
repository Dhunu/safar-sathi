import FleetManagementForm from "@/components/fleet-management/fleet-management-form";
import Image from "next/image";
import React from "react";

export default function FleetManagement() {
    return (
        <div className="pt-5 sm:pt-10  w-full">
            <div className="max-w-screen-2xl h-[80vh] mx-auto px-5 sm:px-10">
                <Image
                    src="/images/truck-map.png"
                    alt="map-overview"
                    width={1920}
                    height={1080}
                    className="object-cover w-full  h-[80%] custom-shadow"
                />
                <p className="text-sm font-semibold text-right mt-2 text-primary ">
                    Map view showing the real time
                </p>
            </div>
            <div className="w-full px-5 sm:px-10">
                <h2 className="text-2xl lg:text-3xl font-semibold text-primary">
                    Optimise your route with us
                </h2>
                <FleetManagementForm />
            </div>
        </div>
    );
}
