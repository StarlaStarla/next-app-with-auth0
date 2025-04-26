import { Person } from '@/app/lib/type'
import { Table } from '@tanstack/react-table'

function Pagination({ table }: { table: Table<Person> }) {
  const changePageSize = (e: { target: { value: any } }) => {
    table.setPageSize(Number(e.target.value))
  }

  const itemStartNumber = table.getState().pagination.pageIndex * table.getRowModel().rows.length + 1
  const itemEndNumber = table.getRowModel().rows.length

  return (
    <div className='h-13 flex justify-between items-center px-4 text-[#6B7280] font-[Poppins]'>
      <div>
        <span>Items per page</span>
        <div className='inline-block mx-3 relative bg-[url(/arrow-down.svg)] bg-no-repeat bg-[center_right_1rem]'>
          {/* <span className='absolute w-2 h-2 border-b-2 border-r-2 rotate-45 right-2'></span> */}
          <select
            value={table.getState().pagination.pageSize}
            onChange={(e) => changePageSize(e)}
            className='border h-10 w-21 border-[#E5E7EB] rounded-lg text-[#1F2937] cursor-pointer px-4 outline-none appearance-none font-semibold'
          >
            {[15, 30, 45].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
        </div>
        {itemStartNumber} - {itemEndNumber} of {table.getRowCount().toLocaleString()} Items
      </div>
      <div className='flex items-center gap-3'>
        <button className='cursor-pointer' onClick={table.firstPage} disabled={!table.getCanPreviousPage()}>
          {'<'}
        </button>
        <button className='cursor-pointer' onClick={table.previousPage} disabled={!table.getCanPreviousPage()}>
          {'Previous'}
        </button>
        <input
          type='number'
          min='1'
          max={table.getPageCount()}
          defaultValue={table.getState().pagination.pageIndex + 1}
          onChange={(e) => {
            const page = e.target.value ? Number(e.target.value) - 1 : 0
            table.setPageIndex(page)
          }}
          className='border p-1 rounded-4xl w-9 border-[#E5E7EB] text-center outline-none appearance-button-none'
        />
        of
        <span>{table.getPageCount().toLocaleString()}</span>
        <button className='cursor-pointer' onClick={table.nextPage} disabled={!table.getCanNextPage()}>
          {'Next'}
        </button>
        <button className='cursor-pointer' onClick={() => table.lastPage()} disabled={!table.getCanNextPage()}>
          {'>'}
        </button>
      </div>
    </div>
  )
}

export default Pagination
