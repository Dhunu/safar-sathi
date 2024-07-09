import Image from "next/image";
import React from "react";
import {
    FaLocationCrosshairs,
    FaLocationDot,
    FaArrowRight,
    FaLocationArrow,
    FaAngleRight,
} from "react-icons/fa6";
import { FiBox } from "react-icons/fi";

import { Button } from "@/components/ui/button";

export default function Dashboard() {
    return (
        <div className="px-10 py-5 lg:px-20 lg:py-10 h-[calc(100vh-64px)] w-full">
            <div className="min-h-full w-full grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5 pb-10 2xl:pb-0">
                <div className="flex flex-col h-full justify-between gap-5">
                    <div className="w-full bg-[#FFF0B6] p-4 rounded-lg gap-5 flex flex-col shadow-lg text-primary">
                        <h2 className="text-sm font-semibold text-primary">
                            Your Current Status
                        </h2>
                        <div className="flex gap-4">
                            <div className="flex flex-col items-center">
                                <Image
                                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="profile"
                                    height={100}
                                    width={100}
                                    className="rounded-full object-cover w-24 h-24"
                                />
                                <h2 className="text-lg font-semibold">Kamal</h2>
                            </div>
                            <div className="flex">
                                <div className="flex flex-col gap-1 w-36">
                                    <h2 className="text-sm font-semibold">
                                        Task
                                    </h2>
                                    <h2 className="text-sm font-semibold">
                                        Departed
                                    </h2>
                                    <h2 className="text-sm font-semibold">
                                        Current Location
                                    </h2>
                                    <h2 className="text-sm font-semibold">
                                        Destiantion
                                    </h2>
                                    <h2 className="text-sm font-semibold">
                                        Partnering
                                    </h2>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <p className="text-sm">Fruits Delivery</p>
                                    <p className="text-sm">20 June, 05:00 PM</p>
                                    <p className="text-sm">Connaught Place</p>
                                    <p className="text-sm">
                                        Load Hub,
                                        <span className="text-xxs">
                                            Nagaon, Assam, India
                                        </span>
                                    </p>
                                    <p className="text-sm">No</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full  h-full">
                        <h2 className="font-semibold text-base text-primary h-6">
                            Your Current Route
                        </h2>
                        <div className="w-full h-[calc(100%-24px)] min-h-36 rounded-lg bg-primary"></div>
                    </div>
                    <div className="w-full rounded-lg bg-primary p-4 text-sm font-extralight text-[#FFF0B6] divide-y-[2px] divide-dotted divide-[#FFF0B6]/30 ">
                        <div className="flex justify-between w-full pb-2 text-white">
                            <p>Total Distance</p>
                            <p>2,032km</p>
                        </div>

                        <div className="font-semibold pt-2">
                            <div className="flex justify-between w-full">
                                <p>Estimated Time</p>
                                <p>2 Days</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-full flex flex-col bg-primary rounded-lg p-8 text-white">
                    <p className="text-sm font-extralight text-center w-full mb-5">
                        Your Info
                    </p>
                    <div className="flex flex-col gap-5 w-full">
                        <div className="flex w-full">
                            <h3 className="text-base font-semibold w-1/2">
                                Vehicle Number
                            </h3>
                            <p className="w-1/2 text-end">DL16T3458</p>
                        </div>
                        <div className="flex w-full">
                            <h3 className="text-base font-semibold w-1/2">
                                Owner Name
                            </h3>
                            <p className="w-1/2 text-end">Kamal Sahu</p>
                        </div>
                        <div className="flex w-full">
                            <h3 className="text-base font-semibold w-1/2">
                                Registering Authority
                            </h3>
                            <p className="w-1/2 text-end">Delhi</p>
                        </div>
                        <div className="flex w-full">
                            <h3 className="text-base font-semibold w-1/2">
                                Vehicle Type
                            </h3>
                            <p className="w-1/2 text-end">Medium Truck</p>
                        </div>
                        <div className="flex w-full">
                            <h3 className="text-base font-semibold w-1/2">
                                Fuel Type
                            </h3>
                            <p className="w-1/2 text-end">Petrol</p>
                        </div>
                        <div className="flex w-full">
                            <h3 className="text-base font-semibold w-1/2">
                                Emission Norm
                            </h3>
                            <p className="w-1/2 text-end">BS VI</p>
                        </div>
                        <div className="flex w-full">
                            <h3 className="text-base font-semibold w-1/2">
                                Vehicle Age
                            </h3>
                            <p className="w-1/2 text-end">2 years</p>
                        </div>
                        <div className="flex w-full">
                            <h3 className="text-base font-semibold w-1/2">
                                Vehicle Status
                            </h3>
                            <p className="w-1/2 text-end">Active</p>
                        </div>
                    </div>
                    <Button className="mt-5 bg-[#FFF0B6] hover:bg-[#fce99f] w-20 text-primary self-end text-xs font-semibold transition-colors duration-200 ease-in-out">
                        Edit Info
                    </Button>
                    <div className="flex items-center mx-auto mt-10 justify-end h-full">
                        <svg
                            className="w-8 h-8 ms-3 text-[#FFF0B6]"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                        >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                            className="w-8 h-8 ms-3 text-[#FFF0B6]"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                        >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                            className="w-8 h-8 ms-3 text-[#FFF0B6]"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                        >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                            className="w-8 h-8 ms-3 text-[#FFF0B6]"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                        >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                            className="w-8 h-8 ms-3 text-gray-300 dark:text-gray-500"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                        >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                    </div>
                </div>
                <div className="w-full flex flex-col gap-5 md:col-span-2 2xl:col-span-1">
                    <div className="w-full p-4 flex flex-col bg-[#FFF0B6] rounded-lg relative">
                        <div className="flex gap-2 items-center text-primary">
                            <FaLocationCrosshairs />
                            <div className="flex flex-col">
                                <h2 className="text-base font-semibold">
                                    State Emporium
                                </h2>
                                <p className="text-sm">June 20 05:00 PM</p>
                            </div>
                        </div>
                        <div className="border-r-2  border-dotted w-1 h-10 translate-x-1" />
                        <div className="flex gap-2 items-center text-primary">
                            <FaLocationDot />
                            <div className="flex flex-col">
                                <h2 className="text-base font-semibold">
                                    Block B
                                </h2>
                                <p className="text-sm">June 20 05:07 PM</p>
                            </div>
                        </div>
                        <div className="border-r-2  border-dotted w-1 h-10 translate-x-1" />
                        <div className="flex gap-2 items-center text-primary">
                            <FaLocationDot />
                            <div className="flex flex-col">
                                <h2 className="text-base font-semibold">
                                    Block G
                                </h2>
                                <p className="text-sm">June 20 05:16 PM</p>
                            </div>
                        </div>
                        <p className="mt-5 text-xs text-primary font-semibold">
                            At speed of 60km/hr, you will reach your destination
                            in 2 days.
                        </p>
                        <div className="absolute right-10 bottom-20 text-primary gap-2 flex items-center">
                            <FiBox className="h-5 w-5" />
                            <FaArrowRight className="h-4 w-4" />
                            <p className="text-xs font-semibold">Delicate</p>
                        </div>
                    </div>
                    <div className="w-full p-4 flex flex-col bg-[#FFF0B6] rounded-lg relative text-primary h-full">
                        <div className="flex justify-between">
                            <div className="flex flex-col">
                                <h2 className="text-base font-semibold">
                                    New Partner Request
                                </h2>
                                <div className="flex gap-1 text-xs">
                                    <p>6 Ton</p>
                                    <p>|</p>
                                    <p>Steel</p>
                                    <p>|</p>
                                    <p>1200km</p>
                                </div>
                                <div className="flex gap-1 mt-1">
                                    <FaLocationArrow className="h-4 w-4" />
                                    <p className="text-xs">Raipur to Delhi</p>
                                </div>
                            </div>
                            <Image
                                src="/images/truck.webp"
                                width={100}
                                height={100}
                                alt="truck"
                                className="w-24 h-24 object-contain"
                            />
                        </div>
                        <div className="flex justify-evenly">
                            <Button className="" variant="outline">
                                More Info
                            </Button>
                            <Button>Cancel</Button>
                        </div>
                        <div className="absolute bottom-0 right-0 translate-y-5 text-xs font-semibold flex items-center">
                            Show All
                            <FaAngleRight className="h-3 w-3" />
                        </div>
                    </div>
                    <div className="w-full p-4 flex flex-col bg-[#FFF0B6] rounded-lg relative text-primary mt-5 gap-5">
                        <h2 className="text-base font-semibold">
                            Want to Optimise Your Route?
                        </h2>
                        <div className="flex justify-evenly">
                            <Button className="" variant="outline">
                                Learn More
                            </Button>
                            <Button>Not Now</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
