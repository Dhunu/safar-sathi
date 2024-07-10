"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import CardTransition from "./card-transition";

const cardContent = [
    {
        title: "Load Board",
        description:
            "Match loads with carriers using listings, search, and post functions.",
        image: "/images/load-board.jpg",
        link: "/load-board",
    },
    {
        title: "Fleet Management",
        description: "Track, optimize routes, and monitor fleet metrics.",
        image: "/images/fleet-management.jpg",
        link: "/fleet-management",
    },
    {
        title: "Partner Network",
        description:
            "Manage partnerships, directory, and collaboration opportunities.",
        image: "/images/partner-network.jpg",
        link: "/partner-network",
    },
    {
        title: "Incentive Programs",
        description: "Track and earn rewards for efficiency.",
        image: "/images/incentive-program.jpg",
        link: "/incentive-programs",
    },
    {
        title: "Support & Community",
        description: "Access forums and customer support resources.",
        image: "/images/support-n-community.jpg",
        link: "/support",
    },
];

export default function FeatureCarousel() {
    return (
        <Carousel
            opts={{ align: "start" }}
            className="w-full"
            orientation="horizontal"
        >
            <CarouselContent>
                {cardContent.map((content, index) => (
                    <CarouselItem
                        key={index}
                        className={cn(
                            "basis-1/2 md:basis-1/3 lg:basis-1/4",
                            index === 0 && "ml-10 md:ml-20",
                            index === cardContent.length - 1 && "mr-10 md:mr-20"
                        )}
                    >
                        <Link href={content.link}>
                            <CardTransition delay={index * 0.65}>
                                <Card className="h-[70vh] border-[3px]">
                                    <CardContent className="flex aspect-square items-end justify-center p-0 h-full w-full relative">
                                        <Image
                                            src={content.image}
                                            alt={content.title}
                                            height={1000}
                                            width={500}
                                            className="object-cover w-full h-full absolute z-0"
                                        />
                                        <div className="w-full h-full bg-gradient-to-t from-[#000] via-[#000] to-transparent z-10 opacity-60 absolute" />
                                        <div className="flex flex-col p-5">
                                            <h2 className="text-5xl  z-20 h-28 text-background w-2/3 font-begum-w03-bold">
                                                {content.title}
                                            </h2>
                                            <p className=" z-20 h-16 text-sm text-muted">
                                                {content.description}
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </CardTransition>
                        </Link>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
}
