import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function EntryTable() {
  return (
    <Table className="col-span-4">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Person</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead className="text-right">Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">Geeth</TableCell>
          <TableCell>Food Money</TableCell>
          <TableCell>2300</TableCell>
          <TableCell className="text-right">2024/01/23</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Geeth</TableCell>
          <TableCell>Food Money</TableCell>
          <TableCell>2300</TableCell>
          <TableCell className="text-right">2024/01/23</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Geeth</TableCell>
          <TableCell>Food Money</TableCell>
          <TableCell>2300</TableCell>
          <TableCell className="text-right">2024/01/23</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Geeth</TableCell>
          <TableCell>Food Money</TableCell>
          <TableCell>2300</TableCell>
          <TableCell className="text-right">2024/01/23</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Geeth</TableCell>
          <TableCell>Food Money</TableCell>
          <TableCell>2300</TableCell>
          <TableCell className="text-right">2024/01/23</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Geeth</TableCell>
          <TableCell>Food Money</TableCell>
          <TableCell>2300</TableCell>
          <TableCell className="text-right">2024/01/23</TableCell>
        </TableRow>{" "}
        <TableRow>
          <TableCell className="font-medium">Geeth</TableCell>
          <TableCell>Food Money</TableCell>
          <TableCell>2300</TableCell>
          <TableCell className="text-right">2024/01/23</TableCell>
        </TableRow>{" "}
        <TableRow>
          <TableCell className="font-medium">Geeth</TableCell>
          <TableCell>Food Money</TableCell>
          <TableCell>2300</TableCell>
          <TableCell className="text-right">2024/01/23</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
