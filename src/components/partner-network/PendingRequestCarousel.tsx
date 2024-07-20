"use client";

import { requestType } from "@/constants";
import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { cn } from "@/lib/utils";
import CardTransition from "../card-transition";
import { Card, CardContent } from "../ui/card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FaCalendarDay } from "react-icons/fa";

export default function PendingRequestCarousel({
    requests,
}: {
    requests: requestType[];
}) {
    return (
        <Carousel
            opts={{ align: "start" }}
            className="w-full hidden sm:block py-10"
            orientation="horizontal"
        >
            <CarouselContent>
                {requests &&
                    requests.map((request, index) => (
                        <CarouselItem
                            key={index}
                            className={cn(
                                "basis-1/2 md:basis-1/3 lg:basis-1/4"
                            )}
                        >
                            <Link href={`/request/${request.application_no}`}>
                                <CardTransition delay={index * 0.65}>
                                    <Card className="border-none custom-shadow mb-5 rounded-3xl text-primary">
                                        <div className="flex justify-between">
                                            <h4 className="font-semibold text-sm px-4 py-3">
                                                Application #
                                                {request.application_no}
                                            </h4>
                                            <button className="bg-primary text-[#FFF0B6] px-4 py-3 rounded-tr-3xl rounded-bl-3xl">
                                                Cancel
                                            </button>
                                        </div>
                                        <div className="px-4">
                                            <div className="mt-5 rounded-full w-full justify-between flex px-5 py-3 bg-[#fffbe1] items-center">
                                                <div>{request.pickup}</div>
                                                <ArrowRight className="h-5 w-5" />
                                                <div>{request.destination}</div>
                                            </div>
                                            <div className="flex items-center justify-between mt-3 h-5">
                                                <div className="flex gap-1">
                                                    <FaCalendarDay className="h-4 w-4" />
                                                    <p>
                                                        {request.date_and_time}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                </CardTransition>
                            </Link>
                        </CarouselItem>
                    ))}
            </CarouselContent>
        </Carousel>
    );
}
