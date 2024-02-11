import SideBar from "@/components/common/SideBar";
import ListInternship from "./components/ListInternship";

export default function Page() {
  return (
    <>
      <main className="flex">
        <SideBar />

        <div className="pl-[360px] flex flex-col w-auto mt-[40px]">
          <h1 className="text-xl font-semibold mb-[20px]">Internship Member</h1>
          <ListInternship />
        </div>
      </main>
    </>
  );
}
