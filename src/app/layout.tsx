import "~/styles/globals.css";

// setup poppins font
import { Poppins } from "next/font/google";
import Navbar from "~/components/shared/navbar";
import Footer from "~/components/shared/footer";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Algeria Wow",
  description: "Algeria Wow",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <div className="mx-auto flex w-[100%] flex-col items-center overflow-x-hidden">
          <Navbar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
