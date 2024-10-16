import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  if (session && session?.user) {
    redirect("/");
  }

  return <>{children}</>;
}
