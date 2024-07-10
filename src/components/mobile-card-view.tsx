import { homeCardContent } from "@/constants";
import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";

export default function MobileCardView() {
    return (
        <div className="w-full p-10">
            {homeCardContent.map((content, index) => (
                <Card
                    key={index}
                    className="mb-10 relative flex flex-col h-[500px] w-full justify-end border-4"
                >
                    <CardContent className="flex aspect-square items-end justify-center p-0 h-full w-full relative">
                        <Image
                            src={content.image}
                            alt={content.title}
                            height={500}
                            width={1000}
                            className="object-cover w-full h-full absolute top-0"
                        />
                        <div className="w-full h-full bg-gradient-to-t from-[#000] via-[#000] to-transparent z-10 opacity-60 absolute rounded-lg" />
                        <div className="z-20 flex flex-col p-5">
                            <h2 className="text-3xl sm:text-4xl xl:text-5xl   text-background md:w-2/3 font-begum-w03-bold mb-5">
                                {content.title}
                            </h2>
                            <p className=" h-16 text-sm text-muted">
                                {content.description}
                            </p>
                            <Link href={content.link}>
                                <Button className="mt-5">Learn More</Button>
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
