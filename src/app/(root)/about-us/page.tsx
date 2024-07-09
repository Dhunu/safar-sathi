import React from "react";

export default function AboutUs() {
    return (
        <div className="max-w-screen-lg mx-auto p-10 flex flex-col text-primary gap-32">
            <div className="flex flex-col gap-5">
                <h2 className="text-base font-bold">About Us</h2>
                <div>
                    <h4 className="text-sm font-semibold">Our Mission</h4>
                    <p className="text-sm">
                        At EcoFreight, we are committed to revolutionizing the
                        logistics industry by reducing deadheading and promoting
                        sustainable transportation. Our mission is to create a
                        seamless and efficient trucking network that minimizes
                        empty miles, maximizes resource utilization, and
                        benefits both truck drivers and shippers.
                    </p>
                </div>
                <div>
                    <h4 className="text-sm font-semibold">Who We Are</h4>
                    <p className="text-sm">
                        EcoFreight is a forward-thinking tech company dedicated
                        to addressing one of the trucking industry's most
                        pressing issues: deadheading. Our team comprises
                        logistics experts, software developers, and
                        sustainability advocates who are passionate about making
                        a positive impact on the environment and the economy.
                    </p>
                </div>
                <div>
                    <h4 className="text-sm font-semibold">
                        Join Us on Our Journey
                    </h4>
                    <p className="text-sm">
                        We believe that every mile counts, both for your
                        business and the planet. By using EcoFreight, you're not
                        just improving your bottom line; you're also
                        contributing to a more sustainable future for the
                        logistics industry.
                        <br />
                        Join us on our journey to drive efficiency,
                        profitability, and sustainability. Together, we can
                        transform the way goods are transported, one load at a
                        time
                    </p>
                </div>
            </div>
            <div className="flex flex-col">
                <h2 className="text-base font-bold">Contact Us</h2>
                <p className="text-sm font-semibold">
                    For more information or to get started with{" "}
                    <span className="font-bold">Safar Sathi</span>, contact us
                    at:
                </p>
                <ul className="text-sm list-disc translate-x-5">
                    <li>
                        <span className="font-semibold">Email:</span>{" "}
                        developer@aneglsaikia.com
                    </li>
                    <li>
                        <span className="font-semibold">Phone:</span>{" "}
                        +91-8011158661
                    </li>
                    <li>
                        <span className="font-semibold">Address:</span> Hosue
                        No. 95, Bokul Tol, Near Railway Line, Maaj Uriagaon,
                        Uriagaon, Nagaon, Assam, India
                    </li>
                </ul>
            </div>
        </div>
    );
}
