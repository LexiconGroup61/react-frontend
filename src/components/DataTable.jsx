import {createColumnHelper, flexRender, getCoreRowModel, getSortedRowModel, useReactTable} from "@tanstack/react-table";
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
    { id: 4, title: "Fourth item", year: 1984 }
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

    })

    return (
            <Table>
                <TableHeader>
                { table.getHeaderGroups().map((headerGroup) => (
                    <TableRow>
                        {headerGroup.headers.map((header) => (
                            <TableHead className="text-right" onClick={header.column.getToggleSortingHandler()}>
                                { flexRender(header.column.columnDef.header, header.getContext())}
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
            </Table>

    );
};

export default DataTable;