import Link from "next/link";

interface UnderlineLinkProps {
  href: string;
  textColor: "yellow" | "blue" | "green" | "gray";
  textWeight: "base" | "medium" | "semi-bold" | "bold";
  underlineColor: "yellow" | "blue" | "green" | "gray";
  children: React.ReactNode;
}

export const UnderlineLink = ({
  href,
  textColor,
  textWeight,
  underlineColor,
  children,
}: UnderlineLinkProps) => {
  const getColor = (color: string) => {
    switch (color) {
      case "yellow":
        return "primary-yellow";
      case "blue":
        return "primary-blue";
      case "green":
        return "primary-green";
      case "gray":
        return "text-gray-light";
    }
  };

  return (
    <Link
      href={href}
      className={`relative inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-${textWeight} text-${getColor(textColor)} transition-all ease-in-out before:absolute  before:bottom-0 before:left-[50%] before:h-[1px] before:w-0 before:origin-center before:bg-${getColor(underlineColor)} before:transition-[width] before:duration-700 before:ease-in-out after:absolute after:bottom-0 after:right-[50%] after:h-[1px] after:w-0 after:origin-center after:bg-${getColor(underlineColor)} after:transition-[width] after:duration-700 after:ease-in-out hover:before:w-[50%] hover:after:w-[50%] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50`}
    >
      {children}
    </Link>
  );
};
