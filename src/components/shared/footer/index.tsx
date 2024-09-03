import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import Logo from "../logo";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const paymentMethods = [
    {
      name: "Edahabia",
      image: "/images/payment-methods/dahabia.png",
      alt: "Edahabia",
    },
    {
      name: "Visa",
      image: "/images/payment-methods/visa.png",
      alt: "Visa",
    },
    {
      name: "American Express",
      image: "/images/payment-methods/american-express.png",
      alt: "American Express",
    },
    {
      name: "Master Card",
      image: "/images/payment-methods/master-card.png",
      alt: "Master Card",
    },
  ];

  const links = [
    {
      name: "Activities",
      href: "/activities",
    },
    {
      name: "Landmarks",
      href: "/landmarks",
    },
    {
      name: "Hotels & Apartments",
      href: "/hotels",
    },
    {
      name: "Restaurants",
      href: "/restaurants",
    },
    {
      name: "Flight tickets",
      href: "/flights",
    },
    {
      name: "For tourists",
      href: "/tourists",
    },
    {
      name: "Log in / Sign up",
      href: "/auth",
    },
  ];

  return (
    <footer className="mt-8 w-full bg-primary-blue text-white">
      <div className="mx-auto flex w-full flex-col justify-between gap-y-10 px-4 py-12 sm:px-6 md:flex-row lg:px-8 lg:py-16">
        <section className="mx-auto flex w-full flex-col space-y-8 md:w-1/3">
          <Logo white />
          <div className="flex flex-col items-start space-y-4">
            <p className="text-sm">We accept :</p>
            <div className="flex space-x-3">
              {paymentMethods.map((method) => (
                <Image
                  key={method.name}
                  src={method.image}
                  alt={method.alt}
                  width={50}
                  height={25}
                />
              ))}
            </div>
          </div>
          <p className="mt-12 text-xs opacity-50">
            COPYRIGHT © {Date.now().toString().slice(0, 4)} ALGERIAWOW
          </p>
        </section>

        <section className="mx-auto flex w-full flex-col space-y-4 md:w-1/3">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-text-gray-light transition-all ease-in-out hover:underline"
            >
              {link.name}
            </a>
          ))}
        </section>

        <section className="mx-auto flex w-full flex-col space-y-4 pr-6 md:w-1/3">
          <h3 className="text-sm font-semibold">Have question or problem?</h3>
          <Input
            placeholder="Enter your email"
            className="border-0 bg-gray-400/60 !text-gray-200 !placeholder-gray-200"
          />
          <Textarea
            placeholder="Write your message..."
            className="min-h-[100px] border-0 bg-gray-400/60 !text-gray-200 !placeholder-gray-200"
          />
          <Button className="w-24 bg-primary-yellow">Send</Button>
        </section>
      </div>
    </footer>
  );
}
