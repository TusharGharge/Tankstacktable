import {
  Pagination,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Table,
} from "@nextui-org/react";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { useEffect, useMemo, useState } from "react";
import ColumnFilterData from "./ColumnsFilter";

export type ColumnFiltersState = ColumnFilter[];
export interface ColumnFilter {
  id: string;
  value: unknown;
}
type TableProp<T> = {
  Columns: any;
  Data: [];
  Paginationdata?: any;
  ColumnFilter?: boolean;
  onRenderCell?: (item: T, columnkey: string) => JSX.Element | string;
  PaginationCondition?: any;
  SetSortingTable?: boolean;
};

export function TableCompoent<T>({
  Columns,
  Data,
  Paginationdata,
  ColumnFilter,
  onRenderCell,
  PaginationCondition,
  SetSortingTable,
}: TableProp<T>) {
  const columns = useMemo(() => Columns, []);
  const data = useMemo(() => Data || [], [Data]);
  const [page_num, setPagenum] = useState(1);
  const [pages, settotalpages] = useState(1);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [sorting, setSorting] = useState<any>([]);

  const table = useReactTable({
    columns: columns,
    data: data,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      columnFilters,
      sorting,
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
  });

  useEffect(() => {
    if (PaginationCondition) {
      settotalpages(Paginationdata);
    }
  }, [Paginationdata]);

  return (
    <>
      <Table
        isHeaderSticky
        className="overflow-y-auto overflow-x-auto top-0 z-0 bg-color-black text-white"
      >
        <TableHeader>
          {table.getHeaderGroups().flatMap((headerGroup) =>
            headerGroup.headers.map((header) => (
              <TableColumn
                className="w-[178px] text-left p-2 text-white"
                key={header.id}
                onClick={
                  SetSortingTable
                    ? header.column.getToggleSortingHandler()
                    : undefined
                }
              >
                <div className="flex flex-row items-center text-sm px-2">
                  {SetSortingTable && (
                    <>
                      {header.column.getIsSorted() === "desc" && " 🔽"}
                      {header.column.getIsSorted() === "asc" && " 🔼"}
                      {header.column.getIsSorted() === false && " 🔄"}
                    </>
                  )}
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                  {ColumnFilter && (
                    <ColumnFilterData
                      //@ts-ignore
                      column={header}
                      //@ts-ignore
                      table={table}
                      Data={Data}
                    />
                  )}
                </div>
              </TableColumn>
            ))
          )}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map((row) => {
            return (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <TableCell key={cell.id} className="p-2">
                      {onRenderCell
                        ? onRenderCell(row.original, cell.column.id)
                        : flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <div className="flex justify-center items-center mt-4">
        {PaginationCondition && (
          <Pagination
            showControls
            showShadow
            color="primary"
            page={page_num}
            total={pages}
            onChange={(page) => setPagenum(page)}
            boundaries={1}
          />
        )}
      </div>
    </>
  );
}
