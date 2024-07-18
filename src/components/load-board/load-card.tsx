import { loads } from "@/constants";
import Image from "next/image";
import { LiaTruckLoadingSolid } from "react-icons/lia";
import { IoLocation } from "react-icons/io5";
import { GiWeight } from "react-icons/gi";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function LoadCard(load: (typeof loads)[0]) {
    return (
        <div className="flex flex-col h-[400px] bg-[#FFF0B6] rounded-lg w-full max-w-[400px] mx-auto custom-shadow">
            <Image
                src={load.image}
                alt={load.name}
                width={300}
                height={200}
                className="object-cover w-full h-1/2 rounded-t-lg bg-blue-500"
            />
            <div className="p-4 text-primary">
                <p className="text-sm">{load.name}</p>
                <p className="text-xs text-primary/80">
                    before{" "}
                    <span className="text-lg font-semibold text-primary">
                        {load.deliveryDate.split("-").join("/")}
                    </span>
                </p>
                <div className="rounded-lg w-full py-2 flex justify-evenly mt-2 bg-primary text-[#FFF0B6]">
                    <div className="flex flex-col items-center gap-1">
                        <LiaTruckLoadingSolid className="h-5 w-5 text-[#FFF0B6] " />
                        <p className="text-xs">{load.loadType}</p>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <IoLocation className="h-5 w-5 text-[#FFF0B6] " />
                        <p className="text-xs">{load.destination}</p>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <GiWeight className="h-5 w-5 text-[#FFF0B6] " />
                        <p className="text-xs">{load.weight}</p>
                    </div>
                </div>
                <Link href="/">
                    <Button className="border-primary border bg-transparent hover:bg-primary hover:text-[#FFF0B6] text-primary mt-5 w-full transition-colors duration-500">
                        Continue
                    </Button>
                </Link>
            </div>
        </div>
    );
}
