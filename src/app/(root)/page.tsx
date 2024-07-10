import FeatureCarousel from "@/components/feature-carousel";
import MobileCardView from "@/components/mobile-card-view";
import Transition from "@/components/transition";

export default function Home() {
    return (
        <Transition>
            <main className="w-full sm:h-[calc(100vh-64px)] sm:items-center flex">
                <FeatureCarousel />
                <MobileCardView />
            </main>
        </Transition>
    );
}
