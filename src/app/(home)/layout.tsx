import Navbar from "~/components/shared/navbar";
import Footer from "~/components/shared/footer";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="mx-auto flex w-[100%] flex-col items-center overflow-x-hidden">
        <Navbar />
        {children}
      </div>
      <Footer />
    </>
  );
}
