import { Geist, Geist_Mono, Inter, Lusitana, Poppins } from 'next/font/google'

import { Noto_Sans_TC } from 'next/font/google'

export const inter = Inter({ subsets: ['latin'] })
export const lusitana = Lusitana({ weight: '400', subsets: ['latin'] })

export const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

export const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const noto_sans_tc = Noto_Sans_TC({
  subsets: ['latin']
})

export const poppins = Poppins({
  weight: '500'
})
