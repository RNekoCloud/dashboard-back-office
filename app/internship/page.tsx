import SideBar from "@/components/common/SideBar";
import ListInternship from "./components/ListInternship";

export default function Page() {
  return (
    <>
      <main className="flex">
        <SideBar />
        <h1>ini Internship</h1>
        <div>
          <ListInternship />
        </div>
      </main>
    </>
  );
}
