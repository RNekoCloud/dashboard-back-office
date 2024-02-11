import Image from "next/image";
import SideBar from "@/components/common/SideBar";

export default function Home() {
  return (
    <>
      <main className="flex">
        <SideBar />
        <h1 className="text-3xl font-bold h-screen w-full flex justify-center items-center">
          Selamat Datang Admin
        </h1>
      </main>
    </>
  );
}
