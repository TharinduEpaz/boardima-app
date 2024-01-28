import Image from "next/image";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { People } from "@/components/ui/People";

export default function Home() {
  return (
    <main className="">
      <div className=" bg-[#E2E8F0] h-20 pl-48 pr-48 flex items-center">
        <span className="font-bold text-4xl">All Entries</span>
      </div>

      <div className="pl-48 pr-48 grid grid-cols-5 gap-10 mt-10">
        <div className="col-span-4">
          <Table className="col-span-4">
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div className="col-span-1 bg-slate-100 rounded-md p-10">
          <People />
          hh
        </div>
      </div>
    </main>
  );
}
