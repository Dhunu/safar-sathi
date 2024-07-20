import { PhoneCall } from "lucide-react";
import Link from "next/link";
import React from "react";
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaXTwitter,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <div className="w-full bg-primary text-[#FFF0B6] p-5 sm:p-10 flex flex-col items-center">
            <div className="flex gap-5 sm:gap-10 mx-auto">
                <Link href="/" className="text-lg">
                    Home
                </Link>
                <Link href="/dashboard" className="text-lg">
                    Dashboard
                </Link>
                <Link href="/about" className="text-lg">
                    About
                </Link>
            </div>
            <div className="w-full h-[1px] bg-[#FFF0B6] my-5 sm:my-10" />
            <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-10">
                <div className="flex flex-col items-center w-full sm:w-auto">
                    <h3 className="text-xl sm:text-2xl font-semibold  mb-5">
                        Oppening Hours
                    </h3>
                    <div className="text-sm sm:text-base flex flex-col items-center">
                        <p>Weekdays: 8.00am - 7.30pm</p>
                        <p>Saturday,Sunday: 8.00am - 2.00pm </p>
                    </div>
                </div>
                <div className="flex flex-col items-center w-full sm:w-auto">
                    <h3 className="text-xl sm:text-2xl font-semibold  mb-5">
                        Address
                    </h3>
                    <div className="text-sm sm:text-base flex flex-col items-center">
                        <p>Maaj Uriagaon</p>
                        <p>Near Railway Line, Uriagaon</p>
                        <p>Nagaon, Assam - 782003</p>
                    </div>
                </div>
                <div className="flex flex-col items-center w-full sm:w-auto">
                    <h3 className="text-xl sm:text-2xl font-semibold  mb-5">
                        Contact
                    </h3>
                    <div className="flex items-center text-sm sm:text-base">
                        <MdEmail className="h-4 w-4 mr-2" />
                        developer@angelsaikia.com
                    </div>
                    <div className="flex items-center text-sm sm:text-base">
                        <PhoneCall className="h-4 w-4 mr-2" />
                        +91-8011158661
                    </div>
                </div>
            </div>
            <div className="w-full h-[1px] bg-[#FFF0B6] my-5 sm:my-10" />
            <div className="w-full text-xs sm:text-sm gap-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                <p className="mx-auto">
                    &copy; {currentYear} Safar Sathi. All Rights Reserved.
                </p>
                <div className="flex gap-5 mx-auto">
                    <Link href="/privacy-policy">Privacy Policy</Link>
                    <Link href="/terms-and-conditions">
                        Terms and Conditions
                    </Link>
                </div>
                <div className="flex gap-10 sm:col-span-2 lg:col-span-1 mx-auto">
                    <Link href="https://www.facebook.com/angel.saikia.140/">
                        <FaFacebook className="h-5 w-5" />
                    </Link>
                    <Link href="https://www.instagram.com/saikiaangel_/">
                        <FaInstagram className="h-5 w-5" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/angel-saikia/">
                        <FaLinkedin className="h-5 w-5" />
                    </Link>
                    <Link href="https://x.com/AngelSaikia1">
                        <FaXTwitter className="h-5 w-5" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
