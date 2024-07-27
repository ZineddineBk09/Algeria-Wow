import Navbar from "~/components/shared/navbar";
import Footer from "~/components/shared/footer";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  console.log('Session: ',session)

  if (!session || !session.user) {
    redirect("/login");
  }

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
