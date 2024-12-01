import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="h-screen flex ">
      {/* left side */}
    <div className="w-[15%] md:w-[8%] lg:w-[14%] xl:w-[15%]  p-4 overflow-y-scroll scrollbar-hide">

      <Link href="/" className="flex items-center justify-center lg:justify-start gap-1">

       <Image
        src="/logo.png" alt="logo" width={32} height={32} 
       />
       <span className="hidden lg:block">Zeal</span>
      </Link>
      <Menu/>
    </div>

    {/* right side */}
    <div className="w-[85%] md:w-[92%] lg:w-[85%] xl:w-[85%] bg-[#F7f8FA] overflow-y-scroll scrollbar-hide">
        <Navbar/>
        {children}
    </div>
  </div>;
}
