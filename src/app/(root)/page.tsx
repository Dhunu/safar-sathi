import FeatureCarousel from "@/components/feature-carousel";
import Transition from "@/components/transition";

export default function Home() {
    return (
        <Transition>
            <main className="w-full h-[calc(100vh-64px)] items-center flex">
                <FeatureCarousel />
            </main>
        </Transition>
    );
}
