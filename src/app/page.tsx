import DiscoverExperience from "~/components/home/discover-experience";
import Hero from "~/components/home/hero";

export default function HomePage() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center space-y-16">
      <Hero />
      <DiscoverExperience />
    </main>
  );
}
