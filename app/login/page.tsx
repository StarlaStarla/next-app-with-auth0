import Link from 'next/link'
import { noto_sans_tc } from '../fonts'

export default function Login() {
  return (
    <main className='flex items-center justify-center h-screen w-screen bg-gray-500'>
      <div className='flex items-center justify-center w-[552px] h-[594px] bg-white rounded-tl-lg rounded-br-lg rounded-tr-[36px] rounded-bl-[36px]'>
        <div className='w-[392px] h-[434px]'>
          <div className={noto_sans_tc.className + 'w-32 md:w-36 text-sm font-medium'}>SmartTalentConnect</div>
          <div className='w-full h-[72px] text-2xl mt-4'>
            <p className='font-bold'>Welcome to</p>
            <p>SmartTalenConnect Platform</p>
          </div>
          <div className='text-base mt-4'>Please sign in to continue</div>

          <div className='mt-4'>
            <label className='text-sm font-semibold'>Email</label>
            <input
              type='email'
              className='block w-full h-[51px] border-solid border-[1px] border-[#E5E7EB] hover:border-[#70C1BC] focus:outline-[#70C1BC] rounded-md px-4 mt-2'
              placeholder='Email'
            ></input>
          </div>

          <div className='mt-3'>
            <label className='text-sm font-semibold'>Password</label>
            <input
              type='password'
              className='block w-full h-[51px] border-solid border-[1px] border-[#E5E7EB] hover:border-[#70C1BC] focus:outline-[#70C1BC] rounded-md px-4 mt-2'
              placeholder='Password'
            ></input>
          </div>

          <div className='mt-2'>
            <a className='text-[#007A72] font-medium text-sm '>Forgot my password</a>
          </div>

          <div className='w-full h-[51px] text-white bg-[#70C1BC] text-center rounded-tl-md rounded-br-md rounded-tr-xl rounded-bl-xl mt-3'>
            <Link href='/api/auth/login' className='leading-[51px] font-semibold text-[#F2F9F9]'>
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
