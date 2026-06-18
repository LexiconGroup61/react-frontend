import {createColumnHelper, flexRender, getCoreRowModel, useReactTable} from "@tanstack/react-table";

const data = [
    { id: 1, title: "First item", year: 1996 },
    { id: 2, title: "Second item", year: 2008 },
    { id: 3, title: "Third item", year: 1982 },
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

const Table = () => {

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel()
    })

    return (
            <table>
                <thead>
                { table.getHeaderGroups().map((headerGroup) => (
                    <tr>
                        {headerGroup.headers.map((header) => (
                            <th >
                                { flexRender(header.column.columnDef.header, header.getContext())}
                            </th>
                        ))}
                    </tr>
                ))}
                </thead>
                <tbody>
                { table.getRowModel().rows.map((rowModel) => (
                    <tr>
                    {rowModel.getVisibleCells().map((cell) => (
                        <td>
                            { flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </td>
                    ))}
                </tr>))}
                </tbody>
            </table>

    );
};

export default Table;