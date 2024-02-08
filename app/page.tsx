import Image from "next/image";
import { People } from "@/components/home/People";
import PaginationHome from "@/components/home/Pagination";
import EntryTable from "@/components/home/EntryTable";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="">
      <div className=" bg-[#E2E8F0] h-20 pl-48 pr-48 flex items-center">
        <span className="font-bold text-4xl">All Entries</span>
      </div>

      <div className="pl-48 pr-48 grid grid-cols-6 gap-10 mt-10">
        <div className="col-span-4">
          <EntryTable />
          <PaginationHome />
        </div>
        <div className="col-span-2 bg-slate-100 rounded-md p-10">
          <People />
        </div>
        <Button>Add New Entry</Button>
      </div>
    </main>
  );
}
