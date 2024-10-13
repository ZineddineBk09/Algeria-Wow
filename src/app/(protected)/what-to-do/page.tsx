import { CalendarIcon, MapPin, UserIcon } from "lucide-react";
import dynamic from "next/dynamic";
import AdBanner from "~/components/pages/home/ad-banner";
import WhereToStayPage from "~/components/pages/where-to-stay";
const UserLocation = dynamic(
  () => import("~/components/pages/where-to-stay/filters/map"),
  { ssr: false },
);
import { DatePicker } from "~/components/ui/date-picker";
import { Input } from "~/components/ui/input";
import { PlacesContextProvider } from "~/context/places";

export default function WhereToStay() {
  return (
    <PlacesContextProvider>
      <main className="mx-auto flex min-h-screen w-[90%] flex-col items-center justify-center space-y-16">
        <SearchBar />
        <AdBanner
          text={
            <div>
              Promote your
              <br /> business on AlgeriaWOW
            </div>
          }
          actionText="Get started"
        />
        <WhereToStayPage />
      </main>
    </PlacesContextProvider>
  );
}

function SearchBar() {
  return (
    <>
      <div className="flex w-full items-start space-x-6">
        <UserLocation />

        <div className="">
          <h2 className="mb-4 text-2xl font-bold text-blue-900">
            What to do in Algeria
          </h2>
          <div className="grid grid-cols-9 items-center justify-between space-x-4 rounded-xl bg-white p-3 shadow-inner drop-shadow-md">
            <div className="col-span-2 flex items-center space-x-2 pl-4">
              <MapPin className="h-8 w-8 text-yellow-500" />
              <Input
                type="text"
                placeholder="City"
                className="border-none bg-transparent p-2 focus:outline-none"
              />
            </div>
            <div className="col-span-2 flex items-center space-x-2 border-l pl-4">
              <CalendarIcon className="h-8 w-8 text-yellow-500" />
              <DatePicker placeholder="Check in" />
            </div>
            <div className="col-span-2 flex items-center space-x-2 border-l pl-4">
              <CalendarIcon className="h-8 w-8 text-yellow-500" />
              <DatePicker placeholder="Check out" />
            </div>

            <div className="col-span-2 flex items-center space-x-2 border-l pl-4">
              <UserIcon className="h-8 w-8 text-yellow-500" />
              <Input
                type="text"
                placeholder="Persons"
                className="border-none bg-transparent p-2 focus:outline-none"
              />
            </div>
            <button className="h-10 text-center rounded-lg bg-primary-yellow w-24 text-sm font-semibold text-gray-50 shadow transition-colors hover:bg-primary-yellow/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-yellow lg:h-11">
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
