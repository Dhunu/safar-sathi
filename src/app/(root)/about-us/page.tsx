import CardTransition from "@/components/card-transition";
import Transition from "@/components/transition";
import { Metadata } from "next";

const title = "About Us - Know More About Saफर सathi";
const description =
    "Saफर सathi is a tech company addressing trucking industry's issues: deadheading. Our team comprises logistics experts, software developers, and sustainability advocates.";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title,
        description,
        openGraph: {
            title,
            description,
            images: [
                {
                    url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/og?title=${title}&description=${description}&image=about-us`,
                    width: 1200,
                    height: 630,
                },
            ],
            type: "website",
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/about-us`,
        },
    };
}

export default function AboutUs() {
    return (
        <Transition>
            <div className="max-w-screen-lg mx-auto p-10  sm:pt-20 flex flex-col text-primary gap-32">
                <CardTransition>
                    <div className="flex flex-col gap-5">
                        <h2 className="text-base font-bold">About Us</h2>
                        <div>
                            <h4 className="text-sm font-semibold">
                                Our Mission
                            </h4>
                            <p className="text-sm">
                                At <span className="font-bold">Saफर सathi</span>
                                , we are committed to revolutionizing the
                                logistics industry by reducing deadheading and
                                promoting sustainable transportation. Our
                                mission is to create a seamless and efficient
                                trucking network that minimizes empty miles,
                                maximizes resource utilization, and benefits
                                both truck drivers and shippers.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-sm font-semibold">
                                Who We Are
                            </h4>
                            <p className="text-sm">
                                <span className="font-bold">Saफर सathi</span> is
                                a forward-thinking tech company dedicated to
                                addressing one of the trucking industry&apos;s
                                most pressing issues: deadheading. Our team
                                comprises logistics experts, software
                                developers, and sustainability advocates who are
                                passionate about making a positive impact on the
                                environment and the economy.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-sm font-semibold">
                                Join Us on Our Journey
                            </h4>
                            <p className="text-sm">
                                We believe that every mile counts, both for your
                                business and the planet. By using{" "}
                                <span className="font-bold">Saफर सathi</span>,
                                you&apos;re not just improving your bottom line;
                                you&apos;re also contributing to a more
                                sustainable future for the logistics industry.
                                <br />
                                Join us on our journey to drive efficiency,
                                profitability, and sustainability. Together, we
                                can transform the way goods are transported, one
                                load at a time
                            </p>
                        </div>
                    </div>
                </CardTransition>
                <CardTransition delay={0.65}>
                    <div className="flex flex-col">
                        <h2 className="text-base font-bold">Contact Us</h2>
                        <p className="text-sm">
                            For more information or to get started with{" "}
                            <span className="font-bold">Saफर सathi</span>,
                            contact us at:
                        </p>
                        <ul className="text-sm list-disc translate-x-5">
                            <li>
                                <span className="font-semibold">Email:</span>{" "}
                                developer@angelsaikia.com
                            </li>
                            <li>
                                <span className="font-semibold">Phone:</span>{" "}
                                +91-8011158661
                            </li>
                            <li>
                                <span className="font-semibold">Address:</span>{" "}
                                Hosue No. 95, Bokul Tol, Near Railway Line, Maaj
                                Uriagaon, Uriagaon, Nagaon, Assam, India
                            </li>
                        </ul>
                    </div>
                </CardTransition>
            </div>
        </Transition>
    );
}
