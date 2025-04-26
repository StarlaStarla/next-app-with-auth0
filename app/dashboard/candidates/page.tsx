import Table from '@/component/table'
import Image from 'next/image'

export default function Page() {
  return (
    <>
      <div className='bg-linear-to-br from-[#E9F8F8] to-[#99D3CF] flex justify-between items-center h-25 p-5'>
        <div className='font-bold text-3xl font-[poppins]'>All Candidates</div>
        <div className='w-57.5 h-12.5 bg-[#009188] text-center rounded-tl-sm rounded-tr-xl rounded-bl-xl rounded-br-sm cursor-pointer'>
          <Image src='/plus.svg' alt='create candidate' width={20} height={20} className='inline-block mr-5'></Image>
          <div className='inline font-[poppins] font-semibold text-white text-sm leading-12.5'>Create New Candidate</div>
        </div>
      </div>
      <Table />
    </>
  )
}
