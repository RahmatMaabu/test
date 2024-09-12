import Login from "@/components/FormLogin/Login";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession();
 if (session) {
  redirect("/admin/dashboard")
 }
  return (
    <div className="flex items-center justify-center w-full h-screen bg-slate-100">
    <Login/>
  </div>
  );
}
