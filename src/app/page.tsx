import AdBanner from "~/components/home/ad-banner";
import BestOffers from "~/components/home/best-offers";
import DiscoverExperience from "~/components/home/discover-experience";
import Flights from "~/components/home/flights";
import ForTourists from "~/components/home/for-tourists";
import Hero from "~/components/home/hero";
import WhatToDo from "~/components/home/what-to-do";
import WhereToEat from "~/components/home/where-to-eat";
import WhereToStay from "~/components/home/where-to-stay";

export default function HomePage() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center space-y-16">
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
      <BestOffers />
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
    </main>
  );
}
