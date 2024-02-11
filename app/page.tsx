import { People } from "@/components/home/People";
import PaginationHome from "@/components/home/Pagination";
import EntryTable from "@/components/home/EntryTable";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div className="grid grid-cols-6 gap-10 mt-10">
        <div className="col-span-4">
          <EntryTable />
          <PaginationHome />
        </div>
        <div className="col-span-2 bg-slate-100 rounded-md p-10">
          <People />
        </div>
        <Link href="/add-entry">
          <Button>Add New Entry</Button>
        </Link>
      </div>
    </main>
  );
}
