import CardTransition from "@/components/card-transition";
import LoadCard from "@/components/load-board/load-card";
import PostLoadForm from "@/components/load-board/post-load-form";
import { Input } from "@/components/ui/input";
import { loads } from "@/constants";
import React from "react";

export default function LoadBoard() {
    return (
        <div className="w-full p-5 lg:px-20 lg:py-10">
            <Input placeholder="Search" />
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-10">
                {loads.map((load, index) => (
                    <CardTransition
                        key={index}
                        delay={index < 3 ? 0.3 * index : 0}
                    >
                        <LoadCard {...load} />
                    </CardTransition>
                ))}
            </div>
            <div className="mt-20 lg:mt-32">
                <h1 className="text-2xl lg:text-3xl font-semibold text-primary">
                    Post Load
                </h1>
                <PostLoadForm />
            </div>
        </div>
    );
}
