'use client'

import { createColumnHelper, flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, PaginationState, Row, Table, useReactTable } from '@tanstack/react-table'
import IndeterminateCheckbox from './checkbox'
import { queryCandidates } from '@/app/api/prospect'
import { useEffect, useState } from 'react'
import { Person, Reponse } from '@/app/lib/type'
import Pagination from './pagination'

function table() {
  // const defaultData: Person[] = [
  //   {
  //     firstName: 'tanner',
  //     lastName: 'linsley',
  //     chineseName: 'Huang',
  //     region: 'Guangzhou',
  //     districtCode: 100,
  //     unitCode: 34,
  //     managerCode: 50,
  //     managerName: 'Starla',
  //     blockingStatus: 3
  //   },
  //   {
  //     firstName: 'tandy',
  //     lastName: 'miller',
  //     chineseName: 'Huang',
  //     region: 'Guangzhou',
  //     districtCode: 100,
  //     unitCode: 34,
  //     managerCode: 50,
  //     managerName: 'Starla',
  //     blockingStatus: 3
  //   },
  //   {
  //     firstName: 'joe',
  //     lastName: 'dirte',
  //     chineseName: 'Huang',
  //     region: 'Guangzhou',
  //     districtCode: 100,
  //     unitCode: 34,
  //     managerCode: 50,
  //     managerName: 'Starla',
  //     blockingStatus: 3
  //   }
  // ]
  const [data, setData] = useState<Reponse>()

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 15
  })

  const columnHelper = createColumnHelper<Person>()

  const columns = [
    {
      id: 'select',
      header: ({ table }: { table: Table<Person> }) => (
        <IndeterminateCheckbox
          {...{
            checked: table.getIsAllRowsSelected(),
            indeterminate: table.getIsSomeRowsSelected(),
            onChange: table.getToggleAllRowsSelectedHandler()
          }}
        />
      ),
      cell: ({ row }: { row: Row<Person> }) => (
        <div className='px-1'>
          <IndeterminateCheckbox
            {...{
              checked: row.getIsSelected(),
              disabled: !row.getCanSelect(),
              indeterminate: row.getIsSomeSelected(),
              onChange: row.getToggleSelectedHandler()
            }}
          />
        </div>
      )
    },
    columnHelper.accessor((row) => row.lastName, {
      id: 'lastName',
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => 'Last Name'
    }),
    columnHelper.accessor('firstName', {
      cell: (info) => info.getValue(),
      header: 'First Name'
    }),
    columnHelper.accessor('chineseName', {
      cell: (info) => info.getValue(),
      header: 'Chinese Name'
    }),
    columnHelper.accessor('region', {
      header: 'Region',
      cell: (info) => info.renderValue()
    }),
    columnHelper.accessor('districtCode', {
      header: 'District Code'
    }),
    columnHelper.accessor('unitCode', {
      header: 'Unit Code'
    }),
    columnHelper.accessor('managerCode', {
      header: 'Manager Code'
    }),
    columnHelper.accessor('managerName', {
      header: 'Manager Name'
    }),
    columnHelper.accessor('blockingStatus', {
      header: 'Blocking Status'
    })
  ]

  const table = useReactTable({
    data: data?.data || [],
    columns,
    rowCount: data?.pagination.total || 0,
    getCoreRowModel: getCoreRowModel(),
    onPaginationChange: setPagination,
    //no need to pass pageCount or rowCount with client-side pagination as it is calculated automatically
    state: {
      pagination
    },
    manualPagination: true
    // autoResetPageIndex: false, // turn off page index reset when sorting or filtering
  })

  useEffect(() => {
    queryCandidates(pagination).then((res: Reponse) => {
      setData(res)
    })
  }, [pagination])

  return (
    <div className='m-4 border border-[#E5E7EB] rounded-xl'>
      <div className='h-198 overflow-y-auto border-b border-[#E5E7EB]'>
        <table className='table-fixed w-full'>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr className='h-10 border-b border-[#E5E7EB]' key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th className={`text-[#6B7280] font-medium text-xs font-[Poppins] p-2 ${header.id === 'select' ? 'w-5' : 'w-fit'}`} key={header.id}>
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr className='h-10 border-t border-[#E5E7EB]' key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td className='font-medium text-sm font-[Poppins] text-center p-2 ' key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination table={table} />
    </div>
  )
}
export default table
