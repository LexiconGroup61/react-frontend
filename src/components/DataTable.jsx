import {
    createColumnHelper,
    flexRender,
    getCoreRowModel, getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable
} from "@tanstack/react-table";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {useState} from "react";

const data = [
    { id: 1, title: "First item", year: 1996 },
    { id: 2, title: "Second item", year: 2008 },
    { id: 3, title: "Third item", year: 1984 },
    { id: 4, title: "Fourth item", year: 2006 },
    { id: 5, title: "First item", year: 1945 },
    { id: 6, title: "Second item", year: 2008 },
    { id: 7, title: "Third item", year: 1984 },
    { id: 8, title: "Fourth item", year: 1964 },
    { id: 9, title: "Fourth item", year: 1984 },
    { id: 10, title: "First item", year: 1996 },
    { id: 11, title: "Second item", year: 2008 },
    { id: 12, title: "Third item", year: 2010 },
    { id: 13, title: "Fourth item", year: 2025 }
]

const columnHelper = createColumnHelper();

const columns = [
    columnHelper.accessor('id', {
        header: "Id",
        cell: info => info.getValue()
    }),
    columnHelper.accessor('title', {
        header: "Title",
        cell: info => info.getValue()
    }),
    columnHelper.accessor('year', {
        header: "Year",
        cell: info => info.getValue()

    })
]

const DataTable = () => {

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        globalFilterFn: "text",
        initialState: {
            pagination: {
                pageSize: 20,
            }
        }
    })

    return (
        <>
            <p>{table.getRowCount()} posts in total</p>
            <input value=" "
                   onChange={e => table.setGlobalFilter(String(e.target.value))}
                   placeholder="Search"
                   className="pl-6"
            />
            <Table className="m-auto">

                <TableHeader>
                { table.getHeaderGroups().map((headerGroup) => (
                    <TableRow>
                        {headerGroup.headers.map((header) => (
                            <TableHead className="text-right" onClick={header.column.getToggleSortingHandler()}>
                                { flexRender(header.column.columnDef.header, header.getContext())}
                                <input value={header.column.getFilterValue()}
                                       onChange={e => header.column.setFilterValue(String(e.target.value))}
                                       placeholder="Search"
                                       className="pl-6"
                                />
                            </TableHead>
                        ))}
                    </TableRow>
                ))}
                </TableHeader>
                <TableBody>
                { table.getRowModel().rows.map((rowModel) => (
                    <TableRow>
                    {rowModel.getVisibleCells().map((cell) => (
                        <TableCell className="text-right">
                            { flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </TableCell>
                    ))}
                </TableRow>))}
                </TableBody>
                <div className="flex justify-center w-100">
                <button  className="px-10" onClick={() => table.nextPage()}>Next page</button>
                <button className="px-10"  onClick={() => table.previousPage()}>Previous page</button>
                <button className="px-10"  onClick={() => table.firstPage()}>First page</button>
                <button className="px-10"  onClick={() => table.lastPage()}>Last page</button>
                <p className="py-12">Total pages: {table.getPageCount()}</p>
                </div>
            </Table>
        </>

    );
};

export default DataTable;