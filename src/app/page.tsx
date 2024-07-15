import AdBanner from "~/components/pages/home/ad-banner";
import BestOffers from "~/components/pages/home/best-offers";
import DiscoverExperience from "~/components/pages/home/discover-experience";
import Flights from "~/components/pages/home/flights";
import ForTourists from "~/components/pages/home/for-tourists";
import Hero from "~/components/pages/home/hero";
import WhatToDo from "~/components/pages/home/what-to-do";
import WhereToEat from "~/components/pages/home/where-to-eat";
import WhereToStay from "~/components/pages/home/where-to-stay";

export default function HomePage() {
  return (
    <main className="w-full">
      <div className="mx-auto flex min-h-screen w-[90%] flex-col items-center justify-center space-y-16">
        <Hero />
        <DiscoverExperience />
        <AdBanner
          text={
            <div>
              Promote your
              <br /> business on AlgeriaWOW
            </div>
          }
          actionText="Get started"
        />
        <WhatToDo />
        <AdBanner
          text={
            <div>
              Promote your
              <br /> business on AlgeriaWOW
            </div>
          }
          actionText="Get started"
        />
        <WhereToStay />
        <AdBanner
          text={
            <div>
              Promote your
              <br /> business on AlgeriaWOW
            </div>
          }
          actionText="Get started"
        />
      </div>

      <BestOffers />

      <div className="mx-auto flex min-h-screen w-[90%] flex-col items-center justify-center space-y-16">
        <WhereToEat />
        <AdBanner
          text={
            <div>
              Promote your
              <br /> business on AlgeriaWOW
            </div>
          }
          actionText="Get started"
        />
        <ForTourists />
        <Flights />
      </div>
    </main>
  );
}
