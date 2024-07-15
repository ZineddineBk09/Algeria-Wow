import AdBanner from "~/components/pages/home/ad-banner";
import WhereToStayPage from "~/components/pages/where-to-stay";
import { DatePicker } from "~/components/ui/date-picker";
import { Input } from "~/components/ui/input";

export default function WhereToStay() {
  return (
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
  );
}

function SearchBar() {
  return (
    <>
      <div className="flex w-full items-start space-x-4">
        <div className="relative">
          <img
            src="/placeholder.svg"
            alt="Map thumbnail"
            className="h-32 w-72 rounded-lg object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black bg-opacity-50">
            <span className="font-semibold text-white">
              View on map{" "}
              <ArrowRightIcon className="ml-1 inline-block h-4 w-4" />
            </span>
          </div>
        </div>

        <div className="">
          <h2 className="mb-4 text-2xl font-bold text-blue-900">
            Where to stay in Algeria
          </h2>
          <div className="grid grid-cols-9 items-center justify-between space-x-4 rounded-lg bg-gray-50 p-4 drop-shadow-lg">
            <div className="col-span-2 flex items-center space-x-2 pl-4">
              <LocateIcon className="h-6 w-6 text-yellow-500" />
              <Input
                type="text"
                placeholder="City"
                className="border-none bg-transparent p-2 focus:outline-none"
              />
            </div>
            <div className="col-span-2 flex items-center space-x-2 border-l pl-4">
              <CalendarIcon className="h-6 w-6 text-yellow-500" />
              <DatePicker />
            </div>
            <div className="col-span-2 flex items-center space-x-2 border-l pl-4">
              <CalendarIcon className="h-6 w-6 text-yellow-500" />
              <DatePicker />
            </div>

            <div className="col-span-2 flex items-center space-x-2 border-l pl-4">
              <UserIcon className="h-6 w-6 text-yellow-500" />
              <Input
                type="text"
                placeholder="Persons"
                className="border-none bg-transparent p-2 focus:outline-none"
              />
            </div>
            <button className="h-11 rounded-md bg-primary-yellow px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-primary-yellow/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-yellow lg:h-12">
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function ArrowRightIcon(props: { className?: string; onClick?: () => void }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function CalendarIcon(props: { className?: string; onClick?: () => void }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function LocateIcon(props: { className?: string; onClick?: () => void }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  );
}

function UserIcon(props: { className?: string; onClick?: () => void }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
