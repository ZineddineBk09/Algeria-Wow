import dynamic from "next/dynamic";
const Link = dynamic(() => import("next/link"));
const Image = dynamic(() => import("next/image"));

const Logo = ({
  className = "",
  white = false,
}: {
  className?: string;
  white?: boolean;
}) => {
  return (
    <Link
      href="/"
      prefetch={true}
      passHref
      className={`w-26 relative ${className}`}
    >
      <Image
        src={white ? "/images/logo-white.png" : "/images/logo.png"}
        alt="Company"
        width={150}
        height={150}
        className="h-16 w-48 rounded-lg object-contain"
      />
    </Link>
  );
};

export default Logo;
